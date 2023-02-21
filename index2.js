const xhrUsers = new XMLHttpRequest();
const xhrPosts = new XMLHttpRequest();
const xhrComments = new XMLHttpRequest();

xhrUsers.open("get", "https://jsonplaceholder.typicode.com/users/1", false)

xhrUsers.onload = function () {
    console.log(`Users - status = ${this.status}`)
    console.log(`Users - readystate = ${this.readyState}`)
    console.log(`User responce = ${this.response}`)
    console.log(`-------------------------------`)
}
xhrUsers.onerror = function (err) {
    console.error(err)
}

xhrUsers.send()


xhrPosts.open("get", "https://jsonplaceholder.typicode.com/posts/1", false)
xhrPosts.onload = function () {
    console.log(`Posts - status = ${this.status}`)
    console.log(`Posts - readystate = ${this.readyState}`)
    console.log(`Posts responce = ${this.response}`)
    console.log(`-------------------------------`)
}
xhrUsers.onerror = function (err) {
    console.error(err)
}
xhrPosts.send()


xhrComments.open("get", "https://jsonplaceholder.typicode.com/comments/1", false)
xhrComments.onload = function () {
    console.log(`Comments - status = ${this.status}`)
    console.log(`Comments - readystate = ${this.readyState}`)
    console.log(`Comments responce = ${this.response}`)
    console.log(`-------------------------------`)
}
xhrComments.send()

xhrUsers.onerror = function (err) {
    console.error(err)
}