const eventEmitter=require("node:events");

class PizzaShop extends eventEmitter{
   
    constructor(){
        super();
        this.orderNumber=0;
       
    }
    orderPizza(size,topping){
        this.emit("order-pizza",size,topping);
        this.count++;
   


    }
    showNumberOfOrder(){
        console.log(this.orderNumber);
    }
    
}

module.exports=PizzaShop;


