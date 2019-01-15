let [rom1, rom2] = [readline(), readline()];
let replace = param => [...numbers.entries()].reduce((a, b) => a.replace(new RegExp(b[1], 'g'), `+${b[0]}`), param);
let numbers = new Map([[900, "CM"], [400, "CD"], [90, "XC"], [40, "XL"], [9, "IX"], [4, "IV"], [1000, "M"], [500, "D"], [100, "C"], [50, "L"], [10, "X"], [5, "V"], [1, "I"]]);
let value = eval(replace(rom1) + replace(rom2));
let output = "";
for(let [int, str] of [...numbers.entries()].sort((a, b) => b[0] - a[0]))
    for(;value >= int; value -= int, output += str){}
print(output);
