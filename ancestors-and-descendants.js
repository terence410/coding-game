let stacks = [];
[...Array(+readline())].forEach(_ => {
  let [x, dots, name] = readline().match(/^([\.]*)(.*)/);
  if(dots.length - stacks.length) print(stacks.join` > `);
  stacks.splice(dots.length, stacks.length, name);
});
print(stacks.join` > `);
