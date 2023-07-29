function solution(babbling) {
    let word = ['aya', 'ye', 'woo', 'ma']

    let count = 0;
    babbling.forEach(item => {
        word.forEach(w => {
            item = item.replace(w,'1');
        })
        if(item.replace(/1/g, '') === '')
            count += 1
    })
    return count;
}