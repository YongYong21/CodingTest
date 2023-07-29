function solution(n)
{
    
    let answer = 0;
    let input = String(n);
    
    for (item of input) {
        answer += Number(item)
    }
    return answer
    
}