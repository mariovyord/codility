//  Determine whether a given string of parentheses (multiple types) is properly nested. 

function solution(str) {
    if (str.length % 2 === 1) return 0;

    const openingsArr = [];

    for (let char of str) {
        if (isOpening(char)) {
            openingsArr.push(char);
        } else {
            if (openingsArr.length === 0) return 0;

            const lastOpening = openingsArr.pop();

            if (!isMatching(lastOpening, char)) {
                return 0;
            }
        }
    }

    if (openingsArr.length === 0) {
        return 1;
    } else {
        return 0;
    }

    function isOpening(char) {
        if (char === '(') return true;
        if (char === '{') return true;
        if (char === '[') return true;
        return false;
    }

    function isMatching(char1, char2) {
        if (char1 === '(' && char2 === ')') return true;
        if (char1 === '{' && char2 === '}') return true;
        if (char1 === '[' && char2 === ']') return true;
        return false;
    }
}

console.log(solution("{[()()]}"));

// Detected time complexity: O(N)
// Task Score: 100%
// Correctness: 100%
// Performance: 100%