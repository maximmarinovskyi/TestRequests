const smileOne = document.querySelector("header")
const smileTwo = document.querySelector("main")
const smileThree = document.querySelector("footer")

const button1 = document.querySelector(".button1")
const button2 = document.querySelector(".button2")
const button3 = document.querySelector(".button3")

<<<<<<< HEAD
button1.addEventListener("click", () => {
    smileOne.classList.add("green")
})
button2.addEventListener("click", () => {
    smileTwo.classList.add("blue")
})
button3.addEventListener("click", () => {
    smileTwo.classList.toggle("blue")
})
=======
xhr1.onload = () => {
    console.log(`xhr 1 readystste condition is: ${xhr1.readyState}`)
    console.log(`xhr 1 readystste condition is: ${xhr1.response}`)
}

xhr1.send()
////////////////////////////////////////////////////////////////////
xhr2.open("get", "https://jsonplaceholder.typicode.com/posts/1")

xhr2.onload = () => {
    console.log(`xhr 2 readystste condition is: ${xhr2.readyState}`)
    console.log(`xhr 2 readystste condition is: ${xhr2.response}`)
}

xhr2.send()
=======
let smileOne = document.querySelector(".smile_one")
let smileTwo = document.querySelector(".smile_one")
let smileThree = document.querySelector(".smile_one")

let header = document.querySelector("header")
let main = document.querySelector("main")
let footer = document.querySelector("footer")

let buttonAddClass = document.querySelector(".buttonAddClass")
let buttonRemoveClass = document.querySelector(".buttonRemoveClass")

buttonAddClass.addEventListener("click", function () {
    header.classList.add("header2")
})
buttonRemoveClass.addEventListener("click", function () {
    header.classList.remove("header2")
})



<<<<<<< HEAD
// smileOne.addEventListener("click", () => {
//     randInt(0, 255)
//     changeColorHeader()
// })
// smileTwo.addEventListener("click", changeColorMain)
// smileThree.addEventListener("click", changeColorFooter)

// function changeColorHeader() {
//     this.style.backgroundColor = `rgb(${randInt(0, 255)}, ${randInt(0, 255)}, ${randInt(0, 255)})`
// }
// function changeColorMain() {
//     this.style.backgroundColor = `rgb(${randInt(0, 255)}, ${randInt(0, 255)}, ${randInt(0, 255)})`
// }
// function changeColorFooter() {
//     this.style.backgroundColor = `rgb(${randInt(0, 255)}, ${randInt(0, 255)}, ${randInt(0, 255)})`
// }

// function randInt(min, max) {
//     let rand = min + Math.random() * (max + 1 - min)
//     return Math.floor(rand)
// }

=======
console.log(`/////////////////////////////////////////////////////////////////////////`)
>>>>>>> 4df11b950418f8d1acf38bf908f4d0cd0d15970c
>>>>>>> 629483adf215a16a9e357231043c17f34d78b9ed
>>>>>>> a119416933cbe440acc9e114237fba96b9e7b29a
