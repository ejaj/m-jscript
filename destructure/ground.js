// const user = {
//     id:339,
//     name:'Ray',
//     age:35
// }
// Generic way
// var name = user["name"];
// console.log(name)

// Destructuring way
// const {name} = user;
// const { name: title} = user
// console.log(title)


// const user = {
//     id:339,
//     name:'Ray',
//     age:35,
//     education: {
//         degree: "Masters"
//     }
// }

// const { education:{degree:x}, } = user
// console.log(x)

// defult value for education, if not found in the obejct

// const { education:{degree:x} = {} } = user
// console.log(x)

// var numbers = [1,2,3,4,5,6]
// var [a,b] = numbers
// console.log(a, b)

// var [,a,,b] = numbers
// console.log(a, b)

// var numbers = [1,2,[3,100,500],4,6]
// var [,,[,a,b]] = numbers

// console.log(a,b)

var a = 1
var b = 2
[b,a] = [a,b]
console.log(a,b)


















