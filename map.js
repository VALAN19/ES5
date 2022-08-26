let cardAce = {
    name:'Ace of spades'
};
let cardKing = {
    name: 'King of clubs'
};
let deck = new Map();
deck.set('as',cardAce);
deck.set('kc',cardKing);
console.log(deck.get('as'));