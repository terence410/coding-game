let [LON, LAT, N] = [1,1,1].map(_ => +readline().replace(',', '.'));
print([...Array(N)].map(_ => readline().replace(/,/g, '.').split`;`)
    .reduce((a,b) => a[0] < (v=Math.pow(LAT-+b[5],2) + Math.pow((+b[4]-LON),2)) ? a: [v, b[1]], [10000]).pop());
