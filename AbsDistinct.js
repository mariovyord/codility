function solution(arr) {
    const unique = [];

    for (let num of arr) {
        const current = Math.abs(num);
        if (unique.includes(current) === false) {
            unique.push(current);
        }
    }

    return unique.length;
}

console.log(solution([-5, -3, -1, 0, 3, 6]));

// Detected time complexity: O(N**2)
// Task Score: 85%
// Correctness: 100%
// Performance: 33%