function calculateTotalPrice(order) {
    let result = 0;
    for (let i = 0; i < order.length; i++) {
      result += i;
    }
    return result;
  }
  
  console.log(calculateTotalPrice([12, 85, 37, 4]));
  console.log(calculateTotalPrice([164, 48, 291]));
  console.log(calculateTotalPrice([412, 371, 94, 63, 176]));