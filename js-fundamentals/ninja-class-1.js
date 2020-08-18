function Ninja(name){
    var self = this;
    self.name = name;
    self.health = 100
    var speed = 3
    var strength = 3
    self.showStats = function(){
        console.log(`My speed is ${speed}, my strength is ${strength}, and I have ${self.health} health remaining.`)
        return this
    }
}
    Ninja.prototype.sayName = function(){
        console.log(`My name is ${this.name}!`)
        return this
    }
    Ninja.prototype.drinkSake = function(){
        this.health += 10;
        return this
    }


const ninja1= new Ninja("Bob")

ninja1.showStats().sayName().drinkSake().showStats()
