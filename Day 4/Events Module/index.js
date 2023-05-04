const EventEmitter = require('node:events');

const emitter = new EventEmitter();


emitter.on("order-pizza", (size) => {
    if (size === 'large') {
        console.log('Complementary drink is to be served');
    }
})
emitter.on("order-pizza", (large, type) => {
    console.log('order received baking of pizza is started', large, type);
})

emitter.emit("order-pizza", "large", "mushroom");