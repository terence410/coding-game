let stacks = [];
let output = x => print(x.join(' > '));
let people = [...Array(+readline())].map(_ => readline().match(/^([\.]*)(.*)/));
people.forEach(person => {
  if(person[1].length !== stacks.length) output(stacks);
  stacks.splice(person[1].length, stacks.length, person[2]);
});
output(stacks);
