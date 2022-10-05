// Count factors of given number n. 

function solution(num) {
    let count = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            count++;
        }
    }

    return count;
}

console.log(solution(24));

// Detected time complexity: O(N)
// Task Score: 78%
// Correctness: 100%
// Performance: 50%