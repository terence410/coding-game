let r = readline, N = +r(), Q = +r();
let mines = [...Array(N)].map(_ => r().split(' ')).reduce((a, b) => Object.assign(a, {[b[0].toLowerCase()]: b[1]}), {});
[...Array(Q)].map(_ => r().split`.`).forEach(s => print(s.length > 1 && mines[s.pop().toLowerCase()] || 'UNKNOWN'));
