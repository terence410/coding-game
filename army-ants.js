let [S1, S2] = readline().split(' ').map(_ => readline().split(''));
for(let i = 0, T = +readline(); i < S1.length; i++)
  S2.splice(Math.min(S2.length - i, Math.max(T - i, 0)), 0, S1[i]);
console.log(S2.join(''));
