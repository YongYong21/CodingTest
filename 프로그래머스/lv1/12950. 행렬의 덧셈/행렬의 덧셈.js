function solution(arr1, arr2) {
    let answer = Array.from(Array(arr1.length), () => new Array(arr1[0].length))
    for(let a = 0; a < arr1.length; a++){
        for(let b = 0; b < arr1[a].length; b++){
           answer[a][b] = arr1[a][b] + arr2[a][b];
        }
    }
    
    return answer
}