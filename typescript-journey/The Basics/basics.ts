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
