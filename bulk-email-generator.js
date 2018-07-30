let lines = [...Array(+readline())].map(_ => readline()).join("\n");
let i = 0;
console.log(lines.replace(/([^(]*)\(([^)]*)\)/g, (x, p1, p2)  => {
  let lines = p2.split("|");
  return p1 +  lines[i++ % lines.length];
}));
