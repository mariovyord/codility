// Rotate an array to the right by a given number of steps. 

function solution(A, K) {
    return recursive(A, K);

    function recursive(arr, n) {
        if (n <= 0) {
            return arr;
        }

        const newArr = [...arr];
        const moveEl = newArr.pop();
        newArr.unshift(moveEl);

        return recursive(newArr, n - 1)
    }
}

console.log(solution([3, 8, 9, 7, 6], 3));

// Task Score: 87%
// Correctness: 87%
// Performance: Not assessed
