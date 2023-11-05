function calculateTotalPrice(order) {
    let sum = 0;
    for (const i of order){
      sum += i;
    }
    return sum;
  }

  console.log(calculateTotalPrice([12, 85, 37, 4]));
  console.log(calculateTotalPrice([164, 48, 291]));
  console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
  console.log(calculateTotalPrice([]));
  console.log(calculateTotalPrice([113,115]));