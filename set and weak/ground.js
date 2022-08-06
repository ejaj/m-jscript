function log(anything) {
    return console.log(anything)
}

// let mySet = new Set()
// mySet.add(5).add(6)
// mySet.add("Bangladesh")
// //mySet.delete("Bangladesh")
// log(mySet.has('Bangladesh'))
// log(mySet)
// log(mySet.size)

// let numbers = [1,2,3]
// let mySet = new Set(numbers)
// log(mySet)

// for (let value of mySet) {
//     console.log(value)
// }

// set to array convert
// log([...mySet]) 
// log(Array.from(mySet))

// let myAArray = [1,2,3,4,4,5,5,3,6,6]
// log([...new Set(myAArray)])

// let a = new Set([1,2,3]);
// let b = new Set([4,3,2]);

// let union = new Set([...a, ...b]);
// log(union)

// let intersection =- new Set([...a].filter(x=>b.has(x)));
// console.log(intersection)


// let diff = new Set(
//     [...a].filter(x=>!b.has(x))
// )
// console.log(diff)


// WEAK Set
const ws = new WeakSet();
// weak set onyl add object
ws.add({
    a:1
},{
    b:2
})
log(ws)





