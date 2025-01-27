// Рефакторинг  з простого fetch на async function 

//?async/await - фактично це імітація синхронності асинхронного коду (послідовність, як .then)
//?- async - оператор який оголошує асинхронну фукнцію. В асинхронних функція можна використовувати оператор await (І ТІЛЬКИ В НИХ). Будь-яка асинхронна фукнція повертає Promise (завжди)!!!

// without async function

// const todolist = () => {
//     return fetch("https://jsonplaceholder.typicode.com/todos")
//     .then((response) => {
//     return response.json();
// })
// .then((data) =>{
//     console.log(data);
//     return data;
    
// })
// }

// todolist().then((data) => {console.log(data)})
// .catch((err) => {console.log(err)})


//async function 
// робимо асинхронну фукнцію для того щоб синтаксично писати "синхронних код"

const todolist = async() => {
      // заморозили функцію до тих пір поки сервер на віддав нам дані, після чого ми ці дані записали в константу response
   const response = await fetch("https://jsonplaceholder.typicode.com/todos");


     // перевіряємо статус відповіді від серверу, якщо він не окей (наприклад, 404), то примусово викидуємо помилку
if(!response.ok){
    throw new Error(response.status);
}
  // заморожуємо виконання фукнції поки метод json не поверне валідні дані з серверу, після чого зберегіаємо ці дані в константу data
const data = await response.json();
return data; 
};
// Обробка
//? First option
// todolist().then((data) => {console.log(data)})
// .catch((err) => {console.log(err)})

//? Second option try&catch

async function end(){
    try{
console.log("Send request for to dodos");

const todos = await todolist();
console.log(todos);

console.log("Todos completed sucessfully");
} catch(err){
console.log("We've received an mistuke during todos request :" , err);
}
};

end();

