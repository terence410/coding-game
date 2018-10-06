let [W, H] = readline().split` `.map(x => +x);
let legs = [...Array(H)].map(_ => readline());
let inputs = legs.shift().split`  `;
let outputs = legs.pop().split`  `;
function ghosts(x, y){
  if(y < legs.length){
    if(legs[y][x * 3 + 1] === '-') x++;
    else if(legs[y][x * 3 - 1] === '-') x--;
    return ghosts(x, y + 1);
  }
  return x;
}
inputs.forEach((x, i) => print(`${x}${outputs[ghosts(i, 0)]}`));
