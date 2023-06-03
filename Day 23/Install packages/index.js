const upperCase=require("upper-case").upperCase;

function greet(name){
    console.log(upperCase(`Hello this is ${name} from the codevolution `));
}

greet("Jeevan");