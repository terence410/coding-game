let [Capacity, Count, N] = readline().split(' ');
let lines = [...Array(+N)].map(_ => +readline());
let reached = [];
let earning = 0;

for (let i = 0, j = 0; j < Count; j++) {
  let v = lines[i];
  let vv = 0;
  let ii = 0;
  
  do{
    v += vv;
    i = ++i % N;
    vv = lines[i];
  }while(v + vv <= Capacity && ++ii < N);

  if (reached) {
    if (reached[i] && reached[i][0] === v) {
      let loopDiff = j - reached[i][1];
      let earningDiff = earning - reached[i][2];
      let multiplier = Math.floor((Count - j) / loopDiff);
      j += loopDiff * multiplier;
      earning += earningDiff * multiplier;
      reached = undefined;
    } else {
      reached[i] = [v, j, earning];
    }
  }
  
  if(j < Count) earning += v;
}
print(earning);
