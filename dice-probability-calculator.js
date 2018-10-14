let expr = readline();
let arr = [];
let matches = expr.match(/d[0-9]/g);
(function generate(index, list, ...args){
  if(index >= list.length) return arr.push(args);
  for(let i = 1; i <= list[index]; i++) generate(index + 1, list, ...args, i);
})(0, matches ? matches.map(x => +x.substr(1)): []);
let dices =  arr.reduce((obj, item) => {
  let value = +eval(item.reduce((a, b) => a.replace(/d[0-9]/, b), expr));
  return Object.assign(obj, {[value]: (obj[value] || 0) + 1}) ;
}, {});
Object.keys(dices).sort((a, b) => a - b).forEach(key => print(`${key} ${(dices[key]/arr.length*100).toFixed(2)}`));
