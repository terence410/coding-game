let castle = [...Array(+readline())].map(readline);
let left = [];
print(castle.every((x, i) => {
    if(x.match(/^(\.*)((\/\\)*(\.)*)*$/)){
        let left1 = x.split("").map((x, i) => x === "/" ? i: -1).filter(x => x >= 0);
        return left.every(x => left1.includes(x - 1) && left1.includes(x + 1)) ?  left = left1: false;
    }
}) ? 'STABLE': 'UNSTABLE');
