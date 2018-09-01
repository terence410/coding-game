let N = +readline();
let seq = [...Array(N)].map((x, i) => i);
let matrix = seq.map(_ => readline().split` `.map(x => +x));
let values = matrix.reduce((a, b) => a.concat(b));
let sums = [];
sums.push(seq.reduce((a, b) => a + matrix[b][b], 0));
sums.push(seq.reduce((a, b) => a + matrix[b][matrix.length - b - 1], 0));
seq.map((x, i) => {
    sums.push(matrix[i].reduce((a, b) => a + b));
    sums.push(seq.reduce((a, b) => a + matrix[i][b], 0));
});
print(values.every((x, i) => values.indexOf(x) === i && x <= N*N) && sums.every(x => x === sums[0]) ? 'MAGIC': 'MUGGLE');
