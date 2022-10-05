// Count minimal number of jumps from position X to Y. 

function solution(X, Y, D) {
    const distance = Y - X;
    return Math.ceil(distance / D)
}

console.log(solution(10, 85, 30));

// Detected time complexity: O(1)
// Task Score: 100%
// Correctness: 100%
// Performance: 100%

