function solution(n) {
    const isPrime = Array(n + 1).fill(true); // 모든 수를 소수로 초기화
    isPrime[0] = isPrime[1] = false; // 0과 1은 소수가 아님


    for (let i = 2; i * i <= n; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j <= n; j += i) {
                isPrime[j] = false;
            }
        }
    }


    let count = 0;
    for (let i = 2; i <= n; i++) {
        if (isPrime[i]) {
            count++;
        }
    }

    return count;
}


