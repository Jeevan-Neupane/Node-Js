class PizzaShop{
    constructor(){
        this.orderNumber=0;
    }
    order(){
        this.orderNumber++;
    }
    displayOrderNumber(){
        console.log(`Current Order Number is ${this.orderNumber}`);
    }
}

module.exports=PizzaShop;