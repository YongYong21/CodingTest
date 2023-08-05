function solution(n, arr1, arr2) {
    const map = []
    
    let arr1Binary =[] 
    
    arr1.forEach(v => {
        v = v.toString(2)
        for(; v.length<n;){
            v = 0 + v.toString(2)
        }
        arr1Binary.push(v)
    })
    
    let arr2Binary =[] 
    arr2.forEach(v=>{
        v = v.toString(2)
        for(; v.length<n;){
            v = 0 + v.toString(2)
        }
        arr2Binary.push(v)
    })
    
    
    for(let a=0;a < n; a++){
        let str =''
        for(let b=0; b < n; b++){
            if(arr1Binary[a][b] == 0 && arr2Binary[a][b] == 0){
                str += ' '
            }
            else {
                str += '#'
            }
        }
        map.push(str)
    }
    return map
    
}