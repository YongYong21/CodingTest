function solution(n, m) {
    let arr = [];
    let num = n*m;
    while ( m!== 0){
        const r = n % m;
        n = m;
        m = r;
    }
    m = num / n;
    arr.push(n)
    arr.push(m)
    return arr
}