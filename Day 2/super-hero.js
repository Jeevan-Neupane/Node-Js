class SuperHero{
    constructor(name){
        this.name=name;
    }
    getName(){
        return this.name;
    }
    setName(name){
        this.name=name;
    }
   
}


// module.exports=new SuperHero('Spider-Man')//&Rather than export of this we can export whole class so we can make as many object we want
module.exports=SuperHero;