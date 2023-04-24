const obj1={
    name:'Bruce Wayne',
}

// const obj2=obj1;


// obj2.name='Clark Kent';

// console.log(obj2)
// console.log(obj1)

//*These both object point to the same location in the memory so changing one will change other as well 

let obj2=obj1;
console.log(obj1===obj2)
console.log(obj2)
obj2={
    name:'Jeevan Neupane',
}//& This create a new object
console.log(obj1===obj2)
// console.log(obj2)
obj2.name="Clark Kent";
console.log(obj2)

console.log(obj1)