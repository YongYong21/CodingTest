function solution(t, p) {
    let count = 0;
    let arr = [];
    for(i=0; i < t.length-p.length+1; i++){
        arr.push(t.slice(i,i + p.length))
    }
    
    arr.forEach(v=>{
        if(v<=p)
            count++
    })
    
    return count
}