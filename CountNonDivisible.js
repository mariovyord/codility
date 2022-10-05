// Calculate the number of elements of an array that are not divisors of each element.

function solution(arr) {
    const res = Array(arr.length).fill(0);

    for (let i = 0; i < arr.length; i++) {
        const current = arr[i];

        for (let j = 0; j < arr.length; j++) {
            const divisor = arr[j];
            if (current % divisor !== 0) {
                res[i]++;
            }
        }
    }

    return res;
}

console.log(solution([3, 1, 2, 3, 6]));  // [2, 4, 3, 2, 0]

// Detected time complexity: O(N ** 2)
// Task Score: 66%
// Correctness: 100%
// Performance: 25%