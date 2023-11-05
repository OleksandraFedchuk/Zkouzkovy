function getEvenNumbers(start, end) {
    let result = [];
    for (let i = start; i <= end; i++) {
      if (i % 2 === 0) {
        result.push(i);
      } 
    }
    return result;
  }

  console.log(getEvenNumbers(2, 5));
  console.log(getEvenNumbers(3, 11));
  console.timeLog(getEvenNumbers(7, 7));