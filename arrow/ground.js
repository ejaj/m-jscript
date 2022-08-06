// function number(){
//     return 10;
// }

// let number = () => {
//     return 10;
// }

// let number = () =>  10;

// let number = () => {
//     console.log(10)
// }
// number()

// let number = (n) => {
//     return n;
// }
// console.log(10)

// et number = (a, b) => a + b;

// var js = {
//     name: 'javascript',
//     libraries: ['Reac', 'Angular', 'Vue'],
//     printLibraries: function(){
//         // this.libraries.forEach(function(a){
//         //     console.log(`${this.name} love ${a}`)
//         // })
        
//         this.libraries.forEach((a) => {
//             console.log(`${this.name} love ${a}`)
//         })
//     }
// };
// js.printLibraries();

const searchInput = document.querySelector(".search")
const display = document.querySelector(".result")
const thanks = document.querySelector(".thanks")

function show() {
    display.innerHTML = this.value;
    var self = this
    setTimeout(function(){
        thanks.innerHTML = `You have typed: ${self.value}`
    }, 100)
}


searchInput.addEventListener("keyup", show)