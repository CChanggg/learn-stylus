"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var obj = { a: 1 };
var objA = { b: 2 };
var obj1 = _extends({}, obj, objA);
console.log(obj1);
