// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    const sorted = A.sort((a, b) => a - b);
    let min = 1;

    for (let i = 0; i < A.length; i++) {
        if (sorted[i] <= 0) continue;
        if (sorted[i] === sorted[i - 1]) continue;
        if (sorted[i] !== min) return min;
        min++;
    }

    return min;
}

console.log(solution([-1, -3])); // 1
console.log(solution([1, 3, 6, 4, 1, 2])); // 5
console.log(solution([1, 2, 3])); // 4

// Detected time complexity: O(N) or O(N * log(N))
// Task Score: 100%
// Correctness: 100%
// Performance: 100%
