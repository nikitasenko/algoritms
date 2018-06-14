function testBrakets(strBrakets) {
    if (!sumOpenCloseBrakets(strBrakets)) return 0;
    let openBrakets = ['(', '{', '['];
    let braketsA = ['(', ')'];
    let braketsB = ['{', '}'];
    let braketsC = ['[', ']'];
    let testBrakets = [];
    for (let i = 0; i < strBrakets.length; i++)
    {
        if (contains(openBrakets, strBrakets[i])) {
            testBrakets.push(strBrakets[i]);
        } else {
            let lastElem = testBrakets.length-1;
            if ( (contains(braketsA, testBrakets[lastElem]) && contains(braketsA, strBrakets[i])) ||
                 (contains(braketsB, testBrakets[lastElem]) && contains(braketsB, strBrakets[i])) ||
                 (contains(braketsC, testBrakets[lastElem]) && contains(braketsC, strBrakets[i])) )
            {
                testBrakets.pop();
            } else return 0;
        }
    }
    if (testBrakets.length === 0) return 1; else return 0;
}

function contains(arr, elem) {
    return arr.find((i) => i === elem) != undefined;
}

function sumOpenCloseBrakets(strBrakets) {
    let brakets = ['(', ')', '{', '}', '[', ']'];
    let openA = 0;
    let closeA = 0;
    let openB = 0;
    let closeB = 0;
    let openC = 0;
    let closeC = 0;
    for (let i = 0; i < strBrakets.length; i++) {
        if (strBrakets[i] === brakets[0]) openA++;
        if (strBrakets[i] === brakets[1]) closeA++;
        if (strBrakets[i] === brakets[2]) openB++;
        if (strBrakets[i] === brakets[3]) closeB++;
        if (strBrakets[i] === brakets[4]) openC++;
        if (strBrakets[i] === brakets[5]) closeC++;

    }
    if (openA !== closeA || openB !== closeB || openC !== closeC) return 0;
    else return 1;
}



let str = ['(', '))', '[}', '{}', '(){}[]', '({[]}{})', '[({}())[]'];
for (let i = 0; i < str.length; i++) {
    if (testBrakets(str[i])) {
        console.log('YES');
    } else {
        console.log('NO');
    }
}




