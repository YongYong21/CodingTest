function solution(nums) {
    const choice = nums.length/2;
    let count = 0;
    
    for(let i = 0; i < choice; i++){
        nums = nums.filter(n=>n!==nums[0]);
        count += 1;
        if(choice == count || nums.length == 0){
            return count;
        }
    }

}