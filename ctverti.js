function calculateEngravingPrice(message, pricePerWord) {
  const getMessage = message.split(" ");
  return getMessage.length * pricePerWord;
}

console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
console.log(calculateEngravingPrice("Web-development is creative work", 40));
console.log(calculateEngravingPrice("Web-development is creative work", 20));