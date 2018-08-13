let regex = /[\(\)]\w*[\(\)]|[{}]\w*[{}]|[\[\]]\w*[\[\]]|[<>]\w*[<>]/g;
let replace = s => regex.test(s) ? replace(s.replace(regex, '')) : s;
[...Array(+readline())].map(_ => console.log(!/[\[\]\(\){}<>]/.test(replace(readline()))));
