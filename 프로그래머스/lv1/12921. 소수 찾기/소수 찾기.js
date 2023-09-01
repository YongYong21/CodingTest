function solution(n) {
    const isPrime = Array(n + 1).fill(true); // 모든 수를 소수로 초기화
    isPrime[0] = isPrime[1] = false; // 0과 1은 소수가 아님

    const primes = [];

    for (let i = 2; i <= n; i++) {
        if (isPrime[i]) {
            primes.push(i); // 소수를 저장
            for (let j = i * 2; j <= n; j += i) {
                isPrime[j] = false; // i의 배수들을 모두 소수가 아닌 것으로 표시
            }
        }
    }

    return primes.length;
}


