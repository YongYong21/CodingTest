function solution(s, n) {
    const arr = [...s];

    const abc = arr.map(item => {
        if (item !== ' ') {
            let code = item.charCodeAt(0) + n;
            if (item >= 'A' && item <= 'Z') {
                if (code > 'Z'.charCodeAt(0)) {
                    code -= 26;
                }
            } else if (item >= 'a' && item <= 'z') {
                if (code > 'z'.charCodeAt(0)) {
                    code -= 26;
                }
            }
            item = String.fromCharCode(code);
            return item;
        } else {
            return ' ';
        }
    });
    return abc.join('');
}
