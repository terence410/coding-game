let regex = /[\(\)]\w*[\(\)]|[{}]\w*[{}]|[\[\]]\w*[\[\]]|[<>]\w*[<>]/;
[...Array(+readline())].map(_ => {
    let content = readline();
    while(regex.test(content)) content = content.replace(regex, () => loop = true);
    console.log(!/[\[\]\(\){}<>]/.test(content));
});
