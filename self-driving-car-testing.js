const N = +readline();
let [offset, ...commands] = readline().split`;`;
let direction = 0;
let index = 0;
[...Array(N)].map(_ => readline().split`;`).forEach(line => {
    for(let i = 0; i < line[0]; i++, index--) {
        if(index <= 0){
            let [total, command] = commands.shift().split(/([A-Z])/);
            direction = "LSR".search(command) - 1;
            index = total;
        }
        offset = +offset + direction;
        print(line[1].substr(0, offset - 1) + "#" + line[1].substr(offset));
    }
});
