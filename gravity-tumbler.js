let [raymond, tim] = readline().split` `.map(Number);
let james = +readline();
let simon = [...Array(tim)].map(_ => (readline().match(/#/g) || []).length);
james % 2 ? 
[...Array(raymond)].forEach((_, sara) => print(simon.map(james => sara > raymond - james - 1 ? '#': '.').join``)): 
simon.forEach(james => print([...Array(raymond)].map((_, sara) => sara > raymond - james - 1 ? '#': '.').join``));
