// There are N chocolates in a circle. Count the number of chocolates you will eat. 

function solution(N, M) {
    const arr = Array(N).fill(1);
    let X = 0;

    while (true) {
        if (arr[X] === 1) {
            arr[X] = 0;
            X = (X + M % N) % N;
        } else {
            return arr.filter(x => x === 0).length;
        }
    }
}

console.log(solution(10, 4));
console.log(solution(15, 3));

// Detected time complexity: O(N + M)
// Task Score: 62%
// Correctness: 100%
// Performance: 25%