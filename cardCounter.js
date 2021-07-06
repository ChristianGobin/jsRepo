let cardArray = ["a", "k", "q", "j", 10, 9, 8, 7, 6, 5, 4, 3, 2];
let arrLength = cardArray.length;
console.log(arrLength);
console.log(Math.floor(Math.random() * arrLength));

//returns hand of user
dealHand = (cardArray) => {
    let randomCardOne= Math.floor(Math.random() * arrLength);
    let randomCardTwo= Math.floor(Math.random() * arrLength);
    //Remove dealt cards from array
    let hand = [cardArray[randomCardOne], cardArray[randomCardTwo]];
    return hand;
}
cardCount = () => {
  //Calculate count using hand values.
}
