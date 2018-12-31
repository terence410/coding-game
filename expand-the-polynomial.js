const poly = readline();
let found0 = poly.match(/\((.*)\)\^2/);
let found1 = poly.match(/(\([^\)]*\)\^?[0-9]?)/g);
if(found0) found1 = [found0[1], found0[1]];

let answers = [1, ...Array(9).fill(0)];
found1.forEach(equation => {
    let found2 = equation.match(/([+-]?[^\+\-\(\)]*)/g);
    let holder = Array(10).fill(0);
    found2.filter(value => value).map(value => {
        let [_, number, x, power] = value.match(/([+-]?[0-9]?)(x?)\^?([0-9]?)/);
        holder[+power || (x === 'x' ? 1: 0)] = isNaN(+number) ? +(number + "1"): +number || 1;
    });
    
    let temp = Array(10).fill(0);
    holder.forEach((v, i) =>  v && answers.forEach((vv, ii) => vv && (temp[i + ii] += v * vv)));
    answers = temp;
});

let outputs = [];
answers.reverse().forEach((vv, ii) => {
    if(vv){
        let power = (10 - ii - 1);
        let alphabet = power > 1 ? "x^" + power: (power ? "x": "");
        let sign = vv > 0 ? (outputs.length ? "+": "") : "-";
        let number = !power || Math.abs(vv) != 1 ? Math.abs(vv): "";
        outputs.push(`${sign}${number}${alphabet}`);
    }
});
print(outputs.join(""));
