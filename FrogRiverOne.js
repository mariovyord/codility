function solution(target, arr) {
    const res = Array(target).fill('filled');

    let i = 0;
    let undefinedIndexes = 0;
    while (i < arr.length) {
        const index = arr[i];
        if (res[index - 1] !== undefined) {
            res[index - 1] = undefined;
            undefinedIndexes++;
        }
        if (undefinedIndexes === res.length) return res.filter(x => x !== undefined).length === 0 ? i : -1;
        i++;
    }

    return res.filter(x => x !== undefined).length === 0 ? i : -1;
}

console.log(solution(3, [6, 1, 1, 2, 3, 5, 4])); // 4
console.log(solution(5, [1, 3, 1, 4, 2, 3, 5, 4])); // 6

// Detected time complexity: O(N)
// Task Score: 100%
// Correctness: 100%
// Performance: 100%