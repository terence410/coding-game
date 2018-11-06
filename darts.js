const SIZE = +readline() / 2;
let names = [...Array(+readline())].map(_ => readline());
let scores = [...Array(+readline())].fill(0).reduce((a, score) => {
    let [name, v1, v2]  = readline().split` `;
    if(Math.abs(v1) + Math.abs(v2) <= SIZE) score = 15;
    else if(Math.sqrt(v1*v1 + v2*v2) <= SIZE) score = 10;
    else if(Math.max(v1, v2) <= SIZE && Math.min(v1, v2) >= -SIZE) score = 5;
    return Object.assign(a, {[name]: (a[name] || 0) + score});
}, {});
names.sort((a, b) => scores[b] - scores[a]).map(name => print(name, scores[name]));
