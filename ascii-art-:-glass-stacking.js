const total = +readline();
let dots = [14, 10, 10, 31];
let layer = 0;
while(layer * (layer + 1)/2 <= total) layer++;
for(let i = 0; i < layer - 1; i++){
    dots.map(v => v.toString(2).replace(/0/g, ' ').replace(/1/g, '*').padStart(5, ' ')).forEach(str => {
        let pad = " ".repeat((layer - i - 2) * 3);
        print(pad + [...Array(i + 1)].map(_ => str).join(" ") + pad);
    });
}
