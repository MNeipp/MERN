const cardValue={
    "Ace": 1, 
    "Two": 2,
    "Three": 3,
    "Four": 4,
    "Five": 5,
    "Six": 6,
    "Seven": 7,
    "Eight": 8,
    "Nine": 9,
    "Ten": 10,
    "Jack": 11,
    "Queen": 12,
    "King": 13
}
const suits = ["Hearts", "Diamonds", "Spades", "Clubs"]
class Card {
    constructor(string, value, suit){
        this._string = string
        this._value = value
        this._suit = suit
    }
    show(){
        console.log(`${this._string} of ${this._suit}`);
        return this;
    }
}

class Deck{
    constructor(){
        this._deck = []
        for (let i = 0; i < suits.length; i++){
            for (const key in cardValue) {
               var x = new Card(key, cardValue[key],suits[i])
                this._deck.push(x)
            }
        }
    }
    shuffle(){
        var x = this._deck.length
        var i
        var temp
        while (x){
            i = Math.floor(Math.random() * x--)
            temp = this._deck[x]
            this._deck[x] = this._deck[i]
            this._deck[i] = temp;
        }
        return this
    }
    deal(){
        return this._deck.pop()
    }
}

class Player{
    constructor(name){
        this.name = name
        this.hand = []
    }
    showHand(){
        for (const x of this.hand) {
            let card = x
            card.show()
        }
        return this
        }
    draw(deck){
        this.hand.push(deck.deal())
        return this
    }
    discard(){
        return this.hand.pop()
    }
}



x =new Deck()
me = new Player("Mason")
x.shuffle()
x.deal()
me.draw(x).draw(x).draw(x)
me.showHand()





