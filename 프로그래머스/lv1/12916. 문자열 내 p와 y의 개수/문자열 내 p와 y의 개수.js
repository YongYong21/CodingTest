function solution(s){
    var answer = true;
    const arr = [...s.toLowerCase()]
    let countP = 0;
    let countY = 0;
    
    for(str of arr){
        if(str==='p')
            countP += 1;
        else if(str==='y')
            countY += 1;
    }
    
    
    return countP===countY;
}