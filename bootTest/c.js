// let c = 1
// setTimeout(() => {
//     c = 3
// },500)
let c = {c:1}
setTimeout(() => {
    c.c = 3
},500)
module.exports = c