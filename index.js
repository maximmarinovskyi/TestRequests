const container = document.querySelector(".container")

const divOne = document.createElement("div")
divOne.textContent = "Div One"
divOne.style.fontSize = "22px"
divOne.style.textAlign = "center"
divOne.style.textDecoration = "underline"
container.before(divOne)

const divTwo = document.createElement("div")
divTwo.textContent = "Div Two"
divTwo.style.fontSize = "22px"
divTwo.style.textAlign = "center"
divTwo.style.textDecoration = "underline"
container.prepend(divTwo)

const divThree = document.createElement("div")
divThree.textContent = "Div Three"
divThree.style.fontSize = "22px"
divThree.style.textAlign = "center"
divThree.style.textDecoration = "underline"
container.append(divThree)

const divFour = document.createElement("div")
divFour.textContent = "Div Four"
divFour.style.fontSize = "22px"
divFour.style.textAlign = "center"
divFour.style.height = "100px"
divFour.style.width = "100px"
divFour.style.border = "3px solid darkgrey"
divFour.style.borderRadius = "10px"
divFour.style.textDecoration = "underline"
container.after(divFour)

setTimeout