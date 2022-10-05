// A non-empty array A consisting of N integers is given. The array contains an odd number of elements, and each element of the array can be paired with another element that has the same value, except for one element that is left unpaired.

function solution(A) {
    const sorted = A.sort((a, b) => a - b);

    return recursive(sorted);

    function recursive(arr) {
        if (arr.length === 1) return arr[0];

        if (arr[0] === arr[1]) {
            return recursive(arr.slice(2));
        } else {
            return arr[0];
        }
    }
}

console.log(solution([1, 2, 3, 3, 2, 1, 4]));

// Time Complexity: O(N**2)
// Task Score: 66%
// Correctness: 100%
// Performance: 25%