let regex = /[\(\)]\w*[\(\)]|[{}]\w*[{}]|[\[\]]\w*[\[\]]|[<>]\w*[<>]/;
[...Array(+readline())].map(_ => {
    let text = readline();
    while(regex.test(text)) text = text.replace(regex, '');
    console.log(!/[\[\]\(\){}<>]/.test(text));
});
