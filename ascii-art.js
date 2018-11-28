let [L, H] = [+readline(), +readline()];
let T = readline().toLowerCase().split``.map(v => v.charCodeAt(0) - 97);
let rows = [...Array(H)].map(_ => readline());
Array(H).fill(0).map((_, i) => print(T.reduce((a, b) => a + rows[i].substr((b < 0 ? 26: b) * L, L), "")));
