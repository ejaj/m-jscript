
//import * as test from './external.js'; // all value named import

// import {pi, a} from './external.js'; // named import

// console.log(pi, a)

// import external, {pi} from './external.js';
// console.log(pi);
// external();

function modifier(strings, ...values) {
    const m = strings.reduce((preV, current) => {
        return preV + current + (values.length?"Mr. " + values.shift():"")
    }, "");
    return m
}

var player1 = "Sakib"
var player2 = "Tamim"

// console.log(`We have ${player1} and ${player1} in our cricekt team.`)

console.log(modifier`We have ${player1} and ${player1} in our cricekt team.`)


