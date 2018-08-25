let [l, x, N] = [...Array(3)].map(_ => +readline());
print((blitz = (l, x) => x >= 0 ? blitz(++l, x - (l * Math.sqrt(l) * 10 | 0)): `${l}\n${-x}`)(l, N * 300 - x));
