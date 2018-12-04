let string = 'URDL';
let sides = Array(4).fill(1);
readline().split``.map(side => string.indexOf(side)).forEach(index => {
    sides[(index + 1) % 4] *= 2;
    sides[(index + 2) % 4] += sides[index];
    sides[(index + 3) % 4] *= 2;
    sides[index] = 1;
});
print(sides[string.indexOf(readline())]);
