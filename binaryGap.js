// Find longest sequence of zeros in binary representation of an integer. 

function solution(N) {
    const binaryArray = N.toString(2).split('');
    const gaps = [0];
    let current = 0;

    for (let i = 0; i < binaryArray.length; i++) {
        if (binaryArray[i] == 0) {
            current++;
        } else {
            gaps.push(current);
            current = 0;
        }
    }
    return Math.max(...gaps);
}

console.log(solution(9) === 2); // 2 
console.log(solution(328) === 2); // 4 
console.log(solution(6291457) === 20); // 4 
console.log(solution(805306373) === 25); // 4 
console.log(solution(1610612737) === 28); // 4 
console.log(solution(5) === 1); // 4 
console.log(solution(561892) === 3); // 4 

// Task Score: 100%
// Correctness: 100%
// Performance: Not assessed

