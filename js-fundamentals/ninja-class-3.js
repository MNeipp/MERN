class Ninja {
    constructor(name){
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }
    sayName(){
        console.log(`My name is ${this.name}`);
        return this;
    }
    showStats(){
        console.log(`My speed is ${this.speed}, my strength is ${this.strength}, and I have ${this.health} health remaining.`);
        return this;
    }
    drinkSake(){
        this.health += 10;
        console.log(`I chugged some sake and now my health is ${this.health}`);
        return this;
    }
}

class Sensei extends Ninja{
    constructor(name){
        super(name);
        this.health = 200
        this.wisdom = 10;
        this.speed = 10;
        this.strength = 10;
    }
    showStats(){
        console.log(`My speed is ${this.speed}, my strength is ${this.strength}, my wisdom is ${this.wisdom} and I have ${this.health} health remaining.`);
        return this;
    }
    speakWisdom(){
        super.drinkSake()
        console.log("Man who make mistake in elevator, wrong on many levels")
        return this;
    }
}


const bob = new Ninja(name="Bob")
// bob.sayName().showStats().drinkSake()
const splinter = new Sensei(name="Splinter")
console.log(splinter.name)
splinter.speakWisdom().drinkSake().speakWisdom().drinkSake()

