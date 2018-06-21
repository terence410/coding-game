let castle = Array(+readline()).fill().map(x => readline());
let cards = [];
let check = castle.every((x, i) => {
    if(x.match(/^(\.*)((\/\\)*(\.)*)*$/)){
        let newCards = x.split("").map((x, i) => x === "/" ? i: -1).filter(x => x >= 0);
        return cards.every(x => newCards.includes(x - 1) && newCards.includes(x + 1)) ? 
             cards = newCards: false;
    }
});
console.log(check ? 'STABLE': 'UNSTABLE');
