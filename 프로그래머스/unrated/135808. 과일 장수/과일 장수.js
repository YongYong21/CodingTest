function solution(k, m, score) {
    let box = parseInt(score.length/m)
    let last = m - 1;
    let sum = 0;
    score.sort((a,b)=>a-b).reverse()
    for(;box!==0;box--){
        sum += score[last] * m   
        last += m 
    }
    
    return sum
    
    
}