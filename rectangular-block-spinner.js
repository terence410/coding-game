let [size, angle] = [+readline(), +readline()];
let inputs = [...Array(size)].map(_ => readline().split` `);
let holders = [...Array(size * 2 - 1)].map(_ => Array(size * 2 - 1).fill` `);
for(let i = size - 1; i > -size; i--)
  for(let j = 0, k = i; j < size && k < size; j++, k++)
    if(k >= 0 && j >= 0)
      holders[-i + size - 1][k + j] = inputs[j][k];
      
for(let i = 0; i < ((angle - 45) % 360) / 90; i++)
  holders = holders[0].map((_, j) => holders.map(row => row[size * 2 - j - 2]));
  
holders.forEach(line => print(line.join``));
