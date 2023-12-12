const stones = [
{ name : "Smaragd", price: 1300, quantity : 2},
{ name : "Sapfir", price : 900, quantity : 6},
{ name : "Granat" , price : 800 , quantity : 8 }, 
{ name : "Izumrud", price : 2000 , quantity : 2}
];

function calculateToatalPrice (stones, stoneName){
for (let stone of stones) {
    if (stone.name === stoneName){
       const totalPrice = stone.price * stone.quantity;

       return totalPrice;
    }
}
}



const result = calculateToatalPrice (stones, "Granat");
console.log(result);

console.table(stones);