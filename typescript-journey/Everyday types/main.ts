/* <---------------------------------------------------------->*/
// types vs interfaces
/* <---------------------------------------------------------->*/

// normal Declaration

interface Car {
  model: string;
  size: {
    width: number;
    height: number;
  };
}

type car = {
  model: string;
  size: {
    width: number;
    height: number;
  };
};

// extending the type/interface

interface BMW extends Car {
  price: number;
}

type bmw = car & {
  price: number;
};

// interfaces can add values on the go

interface Car {
  expenisive: boolean;
}

/* <---------------------------------------------------------->*/
// Type Assertions
/* <---------------------------------------------------------->*/

const username: unknown = "hello world";

/*
    this won't give anything no intellisense 
    console.log(username.)
*/

// much bettter
const betterUsername = username as string;
const betterUsername2 = <string>username;

console.log(betterUsername.length);

/* <---------------------------------------------------------->*/
// Literal Types
/* <---------------------------------------------------------->*/

type names = "Abdulrahman" | "Abood" | "عبيد" | "Abdo" | "D7om";

let myNames: names = "عبيد";

// !Error
// myNames = "Jalal"

function grade(name: string): "long" | "short" | "nothing" | undefined {
  if (name.length >= 7) return "long";
  if (name.length < 7) return "short";
  if (name.length === 0) return "nothing";
}

myNames = "Abdulrahman";

console.log(grade(myNames));

function test(type: "GET" | "POST") {
  // logs "NOPE", "GET", "GET"
  console.log(type);
}

const req = {
  method: "NOPE" as "GET",
  headers: {},
  payload: {},
};

// here it will ignore the litral type and pass in "NOPE"
test(req.method as "GET");

// Method 1
interface Req1 {
  method: "GET" | "POST";
  headers: object;
  payload: object;
}

const req2: Req1 = {
  method: "GET",
  headers: {},
  payload: {},
};

// No Errors
test(req2.method);

// Method 2
const req3 = {
  method: "GET",
  headers: {},
  payload: {},
} as const;

test(req3.method);

/* <---------------------------------------------------------->*/
// null and undefined
/* <---------------------------------------------------------->*/

function get(type: string | null) {
  // returns undefiend
  console.log(type?.toUpperCase());

  // returns an error
  // ? "!" when put after any expression state that this expression isn't null or undefiend
  //   console.log(type!.toUpperCase());
}

// get();

/* <---------------------------------------------------------->*/
// enums
/* <---------------------------------------------------------->*/

enum HeterogeneousEnum {
  A = 5,
  C,
  D,
  // can't put initlized enums before uninitlized enums
  B = "hello",
}

console.log(HeterogeneousEnum.A);
console.log(HeterogeneousEnum.C);
console.log(HeterogeneousEnum.D);
console.log(HeterogeneousEnum.B);

function flipSignInt(number: number) {
  return ~number + 1;
}

console.log(flipSignInt(9));
console.log(flipSignInt(20));
console.log(flipSignInt(100));

enum Shapes {
  Circle,
  Square,
}

interface Shape {
  kind: Shapes;
  radius: number;
}

let c: Shape = {
  kind: Shapes.Circle,
  radius: 100,
};

function printShape(shape: Shapes) {
  if (shape === Shapes.Circle) {
    console.log("CIRCLE");
  }

  if (shape === Shapes.Square) {
    console.log("SQUARE");
  }
}

printShape(c.kind);
printShape(Shapes.Square);

// * Note: Enums are objects so you can do something like this
console.log(Shapes.Circle);
console.log(Shapes.Square);

// ? the keyof operator in typescript

// For an interface
type interfaceKeys = keyof Shape;

// For enums
type keys = keyof typeof Shapes;
