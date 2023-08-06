function solution(numbers) {
    numbers.sort((a,b)=>a-b)
    let answer = []
    
    for(a=0; a< numbers.length - 1; a++){
        for(b = a + 1; b < numbers.length; b++){
            if(!(answer.includes(numbers[a]+numbers[b])))
                answer.push(numbers[a]+numbers[b])
        }
    }
    return answer.sort((a,b)=>a-b)
}