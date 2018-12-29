let alignment = readline();
let inputs = [...Array(+readline())].map(_ => readline());
let max = inputs.reduce((a, b) => Math.max(a, b.length), 0);
if(alignment === 'LEFT')
    print(inputs.join("\n"));
else  if(alignment === 'RIGHT')
    inputs.forEach(input => print(input.padStart(max, ' ')));
else  if(alignment === 'CENTER')
    inputs.forEach(input =>  print(input.padStart((max - input.length)/2 + input.length, ' ')));
else  if(alignment === 'JUSTIFY')
    inputs.forEach(input => print(input.replace(/ /g, "".padStart(1 + (max - input.length) / (input.split` `.length - 1), ' '))));
