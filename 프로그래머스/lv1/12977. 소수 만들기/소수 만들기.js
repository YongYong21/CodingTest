function solution(nums) {
    let answer = 0;
    
    for (let a = 0; a < nums.length - 2; a++) {
        for (let b = a + 1; b < nums.length - 1; b++) {
            for (let c = b + 1; c < nums.length; c++) {
                const sum = nums[a] + nums[b] + nums[c];
                let divisible = true;
                
                for (let d = 2; d < sum; d++) {
                    if (sum % d === 0) {
                        divisible = false;
                        break;
                    }
                }
                
                if (divisible) {
                    answer++;
                }
            }
        }
    }
    
    return answer;
} 

