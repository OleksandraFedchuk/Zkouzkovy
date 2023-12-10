function getAllPropValues(propName) {
    const products = [
      { name: "Radar", price: 1300, quantity: 4 },
      { name: "Scanner", price: 2700, quantity: 3 },
      { name: "Droid", price: 400, quantity: 7 },
      { name: "Grip", price: 1200, quantity: 9 },
    ];
  
  
  const allPropValues = [];
  for (let product of products) {
    if (product[propName]){
        allPropValues.push(product[propName])
    }
  }
  return allPropValues;
    }

   console.log(getAllPropValues("name"));
   console.log(getAllPropValues("quantity"));
   console.log(getAllPropValues("category"));