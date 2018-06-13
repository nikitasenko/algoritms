function brakets(str) {
    let brakets = ['(', ')', '{', '}', '[', ']'];
    let a = 0;
    let b = 0;
    let c = 0;
    let d = 0;
    let e = 0;
    let f = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === brakets[0]) a++;
        if (str[i] === brakets[1]) b++;
        if (str[i] === brakets[2]) c++;
        if (str[i] === brakets[3]) d++;
        if (str[i] === brakets[4]) e++;
        if (str[i] === brakets[5]) f++;

    }
    if (a !== b || c !== d || e !== f) return 0;
    else return 1;

}


let str = ['(())', '(((', '(([[{{}}]]))', '(((([[[[[]])){{})'];
for (let i = 0; i < str.length; i++) {
    if (brakets(str[i])) {
        console.log('Все верно');
    } else {
        console.log('В строке ошибка');
    }
}

