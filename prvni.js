function getLastElementMeta(array) {
    const lastElementIndex = array.length - 1; 
    const result = [array.length - 1, array[lastElementIndex]];
    return result;
  }

//   Задайте ще однуconst з масивом, у якому перший елемент - це array.length - 1, другий елемент - це array[lastElementIndex] і потім поверніть цю const.


console.log(getLastElementMeta(["apple", "peach", "pear", "banana"]));
console.log(getLastElementMeta(["apple", "peach", "pear"]));
console.log(getLastElementMeta(["apple", "peach"]));
console.log(getLastElementMeta(["apple"]));