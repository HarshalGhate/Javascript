function hello(){
    console.log("Hello, world!");
}

function greet(name, callback){
    console.log("Hello, " + name + "!");
    callback();
}

greet("Alice",hello);

// -----

function orderPlace(item, quantity, callback){
    console.log("Order placed: " + quantity + " of " + item);
    callback(item, quantity);
}
function orderDeliver(item, quantity){
    console.log("Order delivered: " + quantity + " of " + item);
}
orderPlace("Book", 2, orderDeliver);

