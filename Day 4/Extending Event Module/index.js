const PizzaClass = require('./Pizza');
const DrinkMachine=require("./drinkMachine");


const pizzaShop = new PizzaClass();
const drinkMachine=new DrinkMachine();

pizzaShop.on("order", (size, topping) => {
    console.log(`The pizza is of size ${size} and of topping ${topping}`);
    drinkMachine.serveDrink(size);
})
pizzaShop.order("large","mushroom")
pizzaShop.displayOrderNumber();
