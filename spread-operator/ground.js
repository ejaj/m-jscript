var numbers = [1,2,3,4];
var a = [...numbers] // exact copy

// var newnumbers = [...numbers, 5,6,7]
// console.log(newnumbers )

// numbers.push(10)
// console.log(numbers)

// var a = [1,2,3]
// var b = [4,5,6]
// var resutl = [...a, ...b]
// console.log(resutl)

const ob1 = {
    x:1,
    y:2
}
const obj2 = {
    a:1,
    b:2
}
console.log({
    ...ob1,
    ...obj2
})