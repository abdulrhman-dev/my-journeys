// my solution of the problem in page 7
interface X {
    flip: Function
}

function fn(x : X) {
    return x.flip()
}

let x = {
    name:"abood",
    flip:() => "hello"
}

let result = fn(x)
console.log(result)

// Mr.Greeter

function greeter(name: string, date: Date) : string{
    return `Hello ${name} today is...${date.toDateString()}`
}

result = greeter("abood", new Date())

console.log(result)

// noImplicitAny
const username = "ahmed"


// functions and types

// ts usaully handles return types so you can throw that away
function func(parameter: string, parameter2: number) : string{
    return parameter + String(parameter2)
}

let funcResult = func("hello ", 2)

console.log(funcResult)

// Contextual typing

let names = ["abood", "abdo", "abid"]

names.forEach(name => {
    console.log(name.toUpperCase())
})

// optional types and object type

function optional(name?:string){

    return name
}

function objectType({name, age}: { name: string, age: number}){

    return `I'm ${name} and I just turned ${age} years old.`
}

let objectTypeResult = objectType({ name: "abood", age:20})
console.log(objectTypeResult)

// Union Types + type aliais 

type myWankyType = string | number[] | number

function union(id: myWankyType){

    if(typeof id === "string"){
        return id.toLowerCase()
    }

    if(Array.isArray(id)){
        return id.filter(id => id !== 0)
    }

    if(typeof id === "number"){
        return id.toString()
    }

}
