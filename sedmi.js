function createReversedArray() {
    let newResult = Array.from(arguments);
    return newResult.toReversed();
  }
  

  console.log(createReversedArray(12, 85, 37, 4));
  console.log(createReversedArray(164, 48, 291));
  console.log(createReversedArray(412, 371, 94, 63, 176));
  console.log(createReversedArray());