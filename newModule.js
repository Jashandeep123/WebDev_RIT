function doSomething(){
    console.log("Do Something - newModule.js")
}

function newFunc(){
    console.log("New function")
}

let arr=[];
function create(element){
    arr.push(element);
    return arr;
}

function read(){
    return arr;
}

function update(index, element){
    arr[index]=element;
    return arr;
}

function deleteFunc(index){
    arr.splice(index,1);
    return arr;
}

module.exports={doSomething, newFunc, create, read, update, deleteFunc};