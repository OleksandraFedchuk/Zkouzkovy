// const LS_KS = 'Array of names';
// const names = ['Alice' , 'Kate', 'Anna'];

// localStorage.setItem(LS_KS , JSON.stringify(names));

// const currentDate = new Date();
// console.log(currentDate);
// const newDate = new Date('9/5/2024');
// console.log(newDate);

// const localTime = currentDate.toLocaleTimeString('uk-UA');
// console.log(localTime);
// __________________________________________________________________________________________________________________
// new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Fulfilled A');
//     }, 1000);
//   })
//     .then(value => console.log(value))
//     .catch(error => console.log(error));
  
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Fulfilled B');
//     }, 3000);
//   })
//     .then(value => console.log(value))
//     .catch(error => console.log(error));
  
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject('Rejected C');
//     }, 2000);
//   })
//     .then(value => console.log(value))
//     .catch(error => console.log(error)); // "Rejected C"
//   __________________________________________________________________________________________________
    // const p1 = Promise.resolve(1);
    // const p2 = Promise.reject("Rejected promise 2");
    // const p3 = Promise.resolve(3);
    
    // Promise.all([p1, p2, p3])
    //     .then(values => console.log(values))
    //     .catch(error => console.log(error)); // "Rejected promise 2"

        // _____________________________________________________________________________________

//         const p1 = Promise.resolve(1);
// const p2 = Promise.reject("Rejected promise 2");
// const p3 = Promise.resolve(3);

// Promise.allSettled([p1, p2, p3])
// 	.then(values => console.log(values));
	// [
	//   { status: "fulfilled", value: 1}, 
  //   { status: "rejected", value: "Rejected promise 2"},
  //   { status: "fulfilled", value: 3}
  // ]

// ___________________________________________________________повертаємо return

// const promise = new Promise((resolve) =>  {
//     resolve(10) ;
// });

// promise.then(value => {
//    return new Promise((resolve) => {
//         resolve(value * 2);
//     });
// }).then(value => console.log(value));
//  20 

// __________________________________________синх та асинх код

// console.log("A"); // -----  синхр

// setTimeout(() => console.log("E"), 0); //makro process

// Promise.reject("C").then((value)  => console.log(value) ,err => console.log(err)).catch(err => console.log(err)); //micro process, this one is bigger to do
// Promise.resolve("D").then((value) => console.log(value)); //micro process

// setTimeout(()  => console.log("E"), 0);//makro process

// console.log("F"); // -----  синхр

//  A => F => D => B => E

//_____________________________________________________

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
// const isLight = confirm("Do you have a light ?");

// if(isLight){
//     resolve("Lecture is happening");
// }else {
//     reject("Lecture is not happening, no light")
// };
// }, 4000);
// });

// // console.log(promise);  // status pending, work with Promise with "then","catch"

// promise
// .then((value) => console.log(value))
// .catch((err) => console.log(err))
// .finally(() => console.log("Not at all"));


