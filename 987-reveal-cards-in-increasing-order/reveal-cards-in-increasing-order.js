/**
 * @param {number[]} deck
 * @return {number[]}
 */
// exact reverse process 
//1. pop element and push to first
//2. push first next element
var deckRevealedIncreasing = function (deck) {
    deck = deck.sort((a, b) => a - b);
    let n = deck.length;
    let reveal = [];
    reveal.unshift(deck[n - 1]);

    for (let i = n - 2; i >= 0; i--) {
        reveal.unshift(reveal.pop());
        reveal.unshift(deck[i]);
    }
    return reveal;
};