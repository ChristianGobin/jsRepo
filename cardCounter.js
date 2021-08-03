let cardArray = ["a", "k", "q", "j", 10, 9, 8, 7, 6, 5, 4, 3, 2];
const cardValue = {
    'a':[1,11],
    'k':10,
    'q':10,
    'j':10,
    //... continue later
         };
let arrLength = cardArray.length;
console.log(arrLength);
console.log(Math.floor(Math.random() * arrLength));

//rules 8 -> A = -1
//rules 5 -> 2 = +1
//else +0;
//returns hand of user
dealHand = (cardArray) => {
    let randomCardOne= Math.floor(Math.random() * arrLength);
    let randomCardTwo= Math.floor(Math.random() * arrLength);
    //Remove dealt cards from array
    let hand = [cardArray[randomCardOne], cardArray[randomCardTwo]];
    return hand;
}
cardCount = () => {
  
}
