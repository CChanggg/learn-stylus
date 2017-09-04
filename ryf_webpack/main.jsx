const React = require('react')
const ReactDOM = require('react-dom')
//模板渲染
// <h1>Hello World!</h1> 就是jsx 在js中使用HTML语法表达dom的功能 模板语法
// DOM js 
ReactDOM.render(<h1>Hello World!</h1>,
    document.querySelector('#wrapper'))