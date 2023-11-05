function calculateTax(amount, taxRate = 0.2) {
    const totalPrice = amount * taxRate ;
    return totalPrice;
  }
  

  console.log(calculateTax(100, 0.1));
  console.log(calculateTax(200, 0.1));
  console.log(calculateTax(100));
  console.log(calculateTax(200));