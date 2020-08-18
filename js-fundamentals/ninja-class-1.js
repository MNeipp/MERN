function Ninja(name, health = 100){
    var self = this;
    self.name = name;
    var speed = 3
    var strength = 3
    var stats = function(){
        console.log(`My speed is ${speed}, my strength is ${strength}, and I have ${health} health remaining.`)
    }
    var drink = function(){
        health += 10
    }
    self.sayName = function(){
        console.log(`My name is ${self.name}!`)
        return self
    }
    self.showStats = function(){
        stats()
        return self
    }
    self.drinkSake = function(){
        drink()
        return self
    }
}

var ninja1= new Ninja("Bob")

ninja1.sayName().showStats().drinkSake().showStats()