const atTheOldToad = {
    potions: [
      { name: "Speed potion", price: 460 },
      { name: "Stone skin", price: 520 },
    ],
    getPotions() {
      return this.potions;
    },
    updatePotionName(oldName, newName) {
      for (let potion of this.potions) {
        if (potion.name === oldName) {
          potion.name = newName;
        }
      }
    },
  };
  

  atTheOldToad.updatePotionName("Stone skin", "Invisibility");
  console.log(atTheOldToad.potions);
  console.log(atTheOldToad.updatePotionName("Speed potion", "Polymorth"));
  console.log(atTheOldToad.potions);


  //Після першого виклику методу atTheOldToad.updatePotionName("Stone skin", "Invisibility"), 
//   у властивості potions буде масив [{ name: "Speed potion", price: 460 }, { name: "Invisibility", price: 520 } ]