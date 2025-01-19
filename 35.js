const todolist = document.querySelector('.todolist');
console.log(todolist);

const createMarkUp = ({completed , title}) =>
    `<li class=${completed ? "done" : "in-progress"}>${title}</li>`;

const createLiArr = (liArr) => liArr.map(createMarkUp).join("");

fetch("https://jsonplaceholder.typicode.com/todos").then((res) => {console.log(res);
    if(!res.ok){
        throw new Error(res.status)
    }
    return res.json(); 
}).then((data) => {console.log(data);
    const listMarkap = createLiArr(data);
    todolist.insertAdjacentHTML("beforeend", listMarkap)
}).catch((error) => {console.error("Fetch Error:",error);
})
