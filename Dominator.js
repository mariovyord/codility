//  Find an index of an array such that its value occurs at more than half of indices in the array. 

function solution(arr) {
    if (arr.length === 0) return -1;

    const sorted = [...arr].sort((a, b) => a - b);
    const res = {
        max: 0,
        leader: undefined,
    };

    let currentCount = 1;

    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] === sorted[i + 1]) {
            currentCount++;
        } else {
            if (currentCount > res.max) {
                res.max = currentCount;
                res.leader = sorted[i];
            } else if (currentCount === res.max) {
                res.leader = undefined
            }
            currentCount = 1;
        }
    }

    if (res.leader !== undefined && res.max > (arr.length / 2)) {
        return arr.indexOf(res.leader);
    } else {
        return -1;
    }
}

console.log(solution([2, 3, 4, 3, 2, 3, -1, 3, 3]));  // 0, 2, 4, 6 or 7 
console.log(solution([1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2]));  // 2
console.log(solution([1]));
console.log(solution([0, 0, 0, 1, 1, 1])); // 1
console.log(solution([2, 1, 1, 1, 3])); // 1

// Detected time complexity: O(N*log(N)) or O(N)
// Task Score: 100%
// Correctness: 100%
// Performance: 100%