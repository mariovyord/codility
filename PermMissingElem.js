//  Find the missing element in a given permutation. 
// range [1..(N + 1)]

function solution(A) {
    const sorted = A.sort((a, b) => a - b);

    if (sorted.length === 0) return 1;
    if (sorted.length === 1) return sorted[0] !== 1 ? 1 : 2;

    let i = -1;

    while (i < sorted.length) {
        i++;
        if (sorted[i] !== i + 1) break;
    }

    return i + 1;
}

console.log(solution([2, 3, 1, 5])); // 4
console.log(solution([1, 2, 3])); // 4
console.log(solution([2, 3])); // 1
console.log(solution([2])); // 1
console.log(solution([1])); // 2
console.log(solution([])); // 1

// Detected time complexity: O(N) or O(N * log(N))
// Task Score: 100%
// Correctness: 100%
// Performance: 100%