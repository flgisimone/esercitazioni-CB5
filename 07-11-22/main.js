fetch("https://jsonplaceholder.typicode.com/users")
.then((res) => res.json())
.then((users) => users.map((info) => console.log("Nome: "+ info.name, "\n", "Indirizzo: "+ Object.values(info.address), "\n", "Città: "+ info.address.city, "\n")))
.catch((e) => console.log("Errore:" + e))
.finally((f) => console.log("----------------------"))

fetch("https://jsonplaceholder.typicode.com/todos")
.then((res) => res.json())
.then((todos) => todos.map((info) => console.log("ID: "+ info.id, "\n", "Titolo: "+ info.title, "\n")))
.catch((e) => console.log("Errore:" + e))
.finally((f) => console.log("----------------------"))
