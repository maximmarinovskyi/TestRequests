const xhr1 = new XMLHttpRequest();
const xhr2 = new XMLHttpRequest();
const xhr3 = new XMLHttpRequest();

xhr1.open("get", "https://jsonplaceholder.typicode.com/todos/1", true)

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