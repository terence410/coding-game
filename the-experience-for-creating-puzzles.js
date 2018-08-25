let [level, xp, N] = [...Array(3)].map(_ => +readline());
let calc = (l, sum, xp) => (sum >= xp) ? calc(l + 1, sum - xp, (l + 1) * (Math.sqrt(l + 1) * 10) | 0): `${l}\n${xp - sum}`;
print(calc(level, N * 300, xp));
