//*Here we can easily reuse the class by exporting whole class

const superHero= require('./super-hero');

const batman=new superHero('Batman');
console.log(batman.getName());
batman.setName('Bruce Wayne');
console.log(batman.getName())


const superman=new superHero('Super-Man');
console.log(superman.getName());
superman.setName("Clark Kent");
console.log(superman.getName());
