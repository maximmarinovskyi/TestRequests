const xhr = new XMLHttpRequest();

xhr.open("get", "https://jsonplaceholder.typicode.com/todos/1", true)

xhr.onload = () => {
    console.log(xhr.readyState)
    console.log(xhr.response)
}

xhr.send()

