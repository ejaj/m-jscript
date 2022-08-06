var numbers = [1,2,3,4,5,6,10]
var abc = [3,4,4,5]
// var result = numbers.find(function(curr, currIndex, arr) {
//     return curr > 4;
// });



// console.log(numbers)
// console.log(result)


// var result = numbers.findIndex((currenValue, index, arr) => {
//     return currenValue > 5;
// });


// var result = numbers.filter((currentValue, index, arr) => {
//     console.log(index)
//     console.log(arr)
//     return currentValue > 4;
// });
// console.log(result)


// var result = numbers.slice(1,3);

// console.log(result)

// var result = numbers.splice(1,2, 10,11,12,13,19)
// console.log(numbers)
// console.log(result)

// var result = numbers.concat(abc)
// console.log(result)

// var result = numbers.push(7,6,7,7)
// print(result)

// var result = numbers.map((num) => {
//     return 2*num
// });
// console.log(numbers)
// console.log(result)


var result = numbers.reduce((preValue, currentValue) => {
    return preValue + currentValue
},0);

console.log(result)