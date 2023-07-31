function solution(s) {
    if(s.length===4 || s.length===6){
        if(s.includes('e'))
            return false
        return !Number.isNaN(Number(s))
    }
    else return false
    
}