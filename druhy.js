function getExtremeElements(array) {
    const lastElementIndex = array.length - 1;
    const result = [array[0], array[lastElementIndex]];
    return result;
  }

  console.log(getExtremeElements([1, 2, 3, 4, 5]));
  console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
  console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));
  