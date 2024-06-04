const pizzaPalace = {
    pizzas: ["Supercheese", "Smoked", "Four meats"],
    checkPizza(pizzaName) {
      return pizzas.includes(pizzaName);
    },
    order(pizzaName) {
      const isPizzaAvailable = this.pizzaName;
  
      if (!isPizzaAvailable) {
        return `Sorry, there is no pizza named «${pizzaName}»`;
      }
  else
      return `Order accepted, preparing «${pizzaName}» pizza`;
    },
  };
  console.log(pizzaPalace.order("Big Mike"));
  console.log(pizzaPalace.order("Four meats"));
  console.log(pizzaPalace.order("Smoked"));