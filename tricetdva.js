const product = {
    name: "Smartphone",
    price: 500,
    discount(percent){
return this.price * (100 - percent) / 100;
    }
};

const client = {
    name: "Alice",
    discountPercent: 8,
    purchase(){
const price = product.discount(this.discountPercent);
console.log(`Покупець ${this.name} придбав товар зі знижкою ${this.discountPercent}%, усього сумма до сплати ${price} грн`);
    }
};

client.purchase();
