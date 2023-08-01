function solution(a, b) {
    let maxNum = Math.max(a,b);
    let minNum = Math.min(a,b);
    let sum = 0;
    for( minNum; minNum < maxNum + 1; minNum++)
        sum += minNum
    return sum
}