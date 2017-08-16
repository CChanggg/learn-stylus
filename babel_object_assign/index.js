let obj = { a: 1 };
let objA = { b: 2 };
var obj1 = Object.assign({}, obj, objA);
console.log(obj1); //{1,2}