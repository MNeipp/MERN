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
    self.kick = function(ninja){
        if (ninja instanceof Ninja){
            var damage = 15*strength
            ninja.health -= damage
            console.log(`${self.name} kicked ${ninja.name} for ${damage} points of damage!`)
            return this
        } else{
            console.log("You can only kick a ninja")
        }
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
    Ninja.prototype.punch = function(ninja){
        if (ninja instanceof Ninja){
            ninja.health -= 10;
            console.log(`${ninja.name} was punched by ${this.name} and lost 5 health!`)
            return this
        } else {
            console.log("You can only punch another ninja")
        }
    }



const ninja1 = new Ninja("Bob")
const ninja2 = new Ninja("Carl")

ninja2.showStats()
ninja1.punch(ninja2)
ninja2.showStats()
ninja2.kick("sarah")
ninja1.showStats()
