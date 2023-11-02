const {doSomething, newFunc, create, read, update, deleteFunc}=require("./newModule.js")

console.log("JS Test using Node")

doSomething();

newFunc();

console.log(create(1));
console.log(create(2));
console.log(read());
console.log(update(0, 99));
console.log(deleteFunc(0))