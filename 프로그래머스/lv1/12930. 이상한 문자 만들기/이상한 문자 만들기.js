function solution(s) {
    let arr = s.split(' ')
    for(let a=0; a<arr.length; a++){
        let change = ''
        for(let b=0; b<arr[a].length; b+=1){
            if(b%2===0){
                change += arr[a][b].toUpperCase();
            }
            else {
                change += arr[a][b].toLowerCase();
            }
        }
        arr[a] = change
    }
    return arr.join(' ')

}