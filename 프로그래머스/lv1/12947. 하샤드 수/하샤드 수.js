function solution(x) {
    let sum = 0;
    let num = String(x).split('').forEach(v=>sum += Number(v))
    return x % sum === 0 
    
}