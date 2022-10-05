// Compute number of distinct values in an array. 

function solution(arr) {
    const unique = new Set();

    arr.forEach(x => unique.add(x));

    return unique.size;
}

console.log(solution([2, 1, 1, 2, 3, 1]));

// Detected time complexity: O(N*log(N)) or O(N)
// Task Score: 100%
// Correctness: 100%
// Performance: 100%