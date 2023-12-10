function addOverNum(value, ...args) {
    let totalSum = 0;
    for (let arg of args) {
      if (value < arg) {
        totalSum += arg ;
      }
    }
    return totalSum;
  }

  console.log(addOverNum(50, 15, 27));
  console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
  console.log(addOverNum(15, 32, 6, 13, 19, 8));