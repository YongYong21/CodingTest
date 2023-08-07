function solution(s) {
    let answer = []

    for(let i = 0; i < s.length; i++){
        if(s.slice(0,i).includes(s[i])){
            let idx
            s.slice(0,i).split('').forEach((v,index) => {
                if( v === s[i]){
                    idx = index
                }
            })
            answer.push(i-idx)
        }
        else {
            answer.push(-1)
        }
    }
    return(answer)
}