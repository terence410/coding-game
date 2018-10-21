const W = +readline();
const H = +readline();
let map = [...Array(H)].map(_ => readline().split` `);
map.forEach((row, x) => row.forEach((v, y) => {
    if(v == 0){
        let total = 0, obstacle = 0;
        for(i = x - 1; i <= x + 1; i++){
            for(j = y - 1; j <= y + 1; j++){
                if(i in map && j in map[i]){
                    total++;
                    map[i][j] == 1 && obstacle++;
                }
            }
        }
        if([4, 6, 9].includes(total) && total - obstacle === 1) return print(y, x);
    }
}));
