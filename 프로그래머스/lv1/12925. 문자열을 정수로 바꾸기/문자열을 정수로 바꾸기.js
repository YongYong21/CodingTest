function solution(s) {
    if(s[0]==='-'){
        return Number(s.slice(0))
    }
    else if(s[0]==='+'){
        return Number(s.slice(1))
    }
    else {
        return Number(s.slice(0))
    }
}