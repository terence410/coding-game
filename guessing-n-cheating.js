const inputs = [...Array(+readline())].map(_ => readline().split(/ (.+)/));
let min = 1, max = 100, value = 0;
let cheated = inputs.some((x, i) => {
    if(x[1] === 'too high') max = Math.min(+x[0] - 1, max);
    else if(x[1] === 'too low') min = Math.max(+x[0] + 1, min);
    else value = +x[0];
    if(max === 0 || min === 100 || min > max || (value && (value < min || value > max) )){
        return print (`Alice cheated in round ${i + 1}`) || true;
    }
});
if(!cheated) print('No evidence of cheating');
