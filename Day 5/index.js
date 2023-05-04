const PizzaShop = require("./PizzaShop");
const Drinks=require("./ServeDrink");

const pizzaOne = new PizzaShop();
const DrinkClass=new Drinks();


pizzaOne.on("order-pizza", (size,topping) => {
   
    console.log(`Pizza of ${size} size and with ${topping} is set on ovan`);
    DrinkClass.serveDrinks(size);
    
 


})

pizzaOne.orderPizza("large","mushroom");