function solution(number, limit, power) {
    let arr = new Array(number).fill(0).map((v,i)=>{
        let count = 0;
        i += 1;
        for(let a = 1; a <= Math.sqrt(i); a++){
            if ( i / a === a ){
                count++
            }
            else if ( i % a === 0){
                
                count++
                count++
            }

        }
        if(count > limit){
            count = power
        }
        return count
    })
    console.log(arr)
    return arr.reduce((a,b)=> a+b)
}