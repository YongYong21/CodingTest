function solution(n, m, section) {
    let sectionIndex = 0;
    let count = 0;
    
    let arr  = new Array(n).fill(0).map((v,i)=> {
        if(i == section[sectionIndex]-1){
            sectionIndex++;
            return v = 1;
        }
        else {
            return v;
        }
    })
    
    for(let i = 0; i < arr.length; i++){
        
        if(arr[i] == 1){
            count++;
            i = i + m - 1
        }
    }
    
    return count
}