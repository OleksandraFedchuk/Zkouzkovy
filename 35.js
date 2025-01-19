const todolist = document.querySelector('.todolist');
console.log(todolist);



fetch("https://jsonplaceholder.typicode.com/todos1").then((res) => {console.log(res);
    if(!res.ok){
        throw new Error(res.status)
    }
    return res.json(); 
}).then((data) => {console.log(data);
}).catch((error) => {console.error("Fetch Error:",error);
})
