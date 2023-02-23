const smileOne = document.querySelector("header")
const smileTwo = document.querySelector("main")
const smileThree = document.querySelector("footer")

const button1 = document.querySelector(".button1")
const button2 = document.querySelector(".button2")
const button3 = document.querySelector(".button3")

button1.addEventListener("click", () => {
    smileOne.classList.add("green")
})
button2.addEventListener("click", () => {
    smileTwo.classList.add("blue")
})
button3.addEventListener("click", () => {
    smileTwo.classList.toggle("blue")
})
