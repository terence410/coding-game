let stacks = [];
[...Array(+readline())].forEach(_ => {
  let person = readline().match(/^([\.]*)(.*)/);
  if(person[1].length - stacks.length) print(stacks.join` > `);
  stacks.splice(person[1].length, stacks.length, person[2]);
});
print(stacks.join` > `);
