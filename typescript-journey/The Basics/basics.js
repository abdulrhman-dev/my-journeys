function fn(x) {
    return x.flip();
}
var x = {
    name: "abood",
    flip: function () { return "hello"; }
};
var result = fn(x);
console.log(result);
// Mr.Greeter
function greeter(name, date) {
    return "Hello ".concat(name, " today is...").concat(date.toDateString());
}
result = greeter("abood", new Date());
console.log(result);
var anyVar = "hello world";
