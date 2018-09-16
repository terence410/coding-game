print([...Array(+readline())]
    .map(_ => readline())
    .map(word => +!['replace', 'add', 'skip'].every(type => trial(word, type)))
    .join(''));

function trial(word, type){
    for(let i = 0, j = word.length - 1; i <= j ; i++, j--){
        if(word[i] !== word[j]){
           if(type === 'skip') i--;
           else if(type === 'add') j++;
           else if(type !== 'replace') return true;
           type = '';
        }
    }
}
