class deckOfCards {
    constructor(){
        this.spades = ["a", "k", "q", "j", 10, 9, 8, 7, 6, 5, 4, 3, 2],
        this.diamonds = ["a", "k", "q", "j", 10, 9, 8, 7, 6, 5, 4, 3, 2],
        this.hearts = ["a", "k", "q", "j", 10, 9, 8, 7, 6, 5, 4, 3, 2],
        this.clovers = ["a", "k", "q", "j", 10, 9, 8, 7, 6, 5, 4, 3, 2]
    }
}

//Face card values, rest of card values will be the literal card number
const cardValues = {
    'a':[1,11],
    'k':10,
    'q':10,
    'j':10
};

let arrLength = cardArray.length;
console.log(arrLength);
console.log(Math.floor(Math.random() * arrLength));

//rules 8 -> A = -1
//rules 5 -> 2 = +1
//else +0;
//returns hand of user and the count of their hand
dealHand = (cardArray) => {
    let randomCardOne= Math.floor(Math.random() * arrLength);
    let randomCardTwo= Math.floor(Math.random() * arrLength);
    cardArray.
    //Cards cannot be the same.
    if (randomCardOne == randomCardTwo) {
        
    }
    //Remove dealt cards from array
    let hand = [cardArray[randomCardOne], cardArray[randomCardTwo]];
    return hand;
}
cardCount = () => {
  
}
