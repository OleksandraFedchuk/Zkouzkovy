//Metod forEach(callback)

function filterArray(numbers, value) {
    let newArray = [];
     numbers.forEach(function(number) {
   if(number>value){
     newArray.push(number);
   }
   }); 
   return newArray; 
}
  
  console.log(filterArray([1, 2, 3, 4, 5], 3)); //[4 , 5]
  console.log(filterArray([1, 2, 3, 4, 5], 4));//[5]
  console.log(filterArray([1, 2, 3, 4, 5], 5));
