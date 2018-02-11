import { a } from './a.js'
// let c = require('./c.js')
// console.log(c)
// setTimeout(() => {
//     console.log(c)
// },1000)

// c = {c: 0}
// console.log(c.c)
// setTimeout(() => {
//     console.log(c.c)
// },1000)

// a=100
// console.log(a)

// 会报错
a.a = 200
console.log(a.a)