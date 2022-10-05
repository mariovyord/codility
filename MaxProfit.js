// Given a log of stock prices compute the maximum possible earning. 

function solution(arr) {
    let result = 0;

    for (let i = 0; i < arr.length; i++) {
        const numA = arr[i];

        for (let j = i; j < arr.length; j++) {
            const numB = arr[j];
            const calc = numB - numA;
            if (calc > result) {
                result = calc;
            }
        }
    }

    return result;
}

console.log(solution([23171, 21011, 21123, 21366, 21013, 21367]));

// Time Complexity: O(N**2)
// Task Score: 66%
// Correctness: 100%
// Performance: 25%