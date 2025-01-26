// Рефакторинг  з простого fetch на async function 

const todolist = () => {
    return fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => {
    return response.json();
})
.then((data) =>{
    console.log(data);
    return data;
    
})
}

todolist().then((data) => {console.log(data)})
.catch((err) => {console.log(err)})
