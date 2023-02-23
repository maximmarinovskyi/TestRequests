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

