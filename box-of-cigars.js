let cigars = [...Array(+readline())].map(_ => +readline());
let max = 0;
for(let i = 0; i < cigars.length; i++){
  for(let j = i + 1; j < cigars.length; j++){
    let diff = cigars[j] - cigars[i];
    let thisMax = 2;
    cigars.slice(j).reduce((a, b) => {
      if(b - a === diff){
        thisMax++;
        return b;
      }
      return a;
    });
    max = Math.max(max, thisMax);
  }
}
console.log(max);
