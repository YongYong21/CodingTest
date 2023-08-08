function solution(a, b, n) {
    let coke = 0;
    while(n >= a){
        coke += Math.floor(n/a) * b
        n = n - a * Math.floor(n/a) + Math.floor(n/a) * b
    }
    return coke
    
}