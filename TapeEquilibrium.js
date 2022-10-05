function solution(arr) {
    let min = Infinity;
    const sum = arr.reduce((a, x) => a + x, 0);

    for (let i = 1; i < arr.length; i++) {
        const currentSum = arr.slice(0, i).reduce((a, x) => a + x, 0);
        const currentDiff = Math.abs(sum - ((currentSum * 2)));
        if (min > currentDiff) min = currentDiff;
        if (min <= 0) return min;
    }
    return min;
}

console.log(solution([3, 1, 2, 4, 3])); // 1
console.log(solution([3, 1])); // 2
console.log(solution([-1000, 1000])); // 2

// Detected time complexity: O(N * N)
// Task Score: 53%
// Correctness: 100%
// Performance: 0%