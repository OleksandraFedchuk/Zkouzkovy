const LS_KS = 'Array of names';
const names = ['Alice' , 'Kate', 'Anna'];

localStorage.setItem(LS_KS , JSON.stringify(names));

const currentDate = new Date();
console.log(currentDate);
const newDate = new Date('9/5/2024');
console.log(newDate);
