function greet(name){
    console.log(`Hello ${name}`);
}

function highOrderFunction(callBackFunction){
    const name="Jeevan";
    callBackFunction(name);

}

highOrderFunction(greet);