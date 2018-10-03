let invalid = [...Array(+readline())].map(_ => readline()).filter(str => {
    if(str.length === 10)
        return str.split('').reduce((v, x, i) => v + (x === 'X' ? 10: +x) * (10 - i), 0) % 11;
    else if(str.length === 13 && !str.match(/[^0-9]/))
        return str.split('').reduce((v, x, i) => v + (+x * (i % 2 ? 3: 1)), 0) % 10;
    return true;
});
print (`${invalid.length} invalid:`);
print (invalid.join('\n'));
