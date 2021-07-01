let cardArray = ["a", "k", "q", "j", 10, 9, 8, 7, 6, 5, 4, 3, 2];
let arrLength = cardArray.length;
console.log(arrLength);
console.log(Math.floor(Math.random() * arrLength));

deal = () => {
    let randomCardOne= Math.floor(Math.random() * arrLength);
    let randomCardTwo= Math.floor(Math.random() * arrLength);
    let cards = [randomCardOne, randomCardTwo];
    return cards;
}
generateHand = (cards) => {
  //Generate hand using given card ints corresponding to cardArray index.
}
cardCount = () => {
  //Calculate count using hand values.
}
