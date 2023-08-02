function solution(n) {
    let arr = Array(n).fill('').map((v,i)=>{
        if(i%2==0){
            return '수'
        }
        if(i%2==1){
            return '박'
        }
    })
    return arr.join('')
}