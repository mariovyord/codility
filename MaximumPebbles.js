function solution(arrInput) {
    const len = arrInput.length;
    const resultArray = new Array(len);

    resultArray[0] = arrInput[0];

    for (let i = 1; i < len; i++) {
        let max = resultArray[i - 1] + arrInput[i];

        for (let j = 1; j <= 6; j++)
            if (i - j >= 0)
                max = Math.max(resultArray[i - j] + arrInput[i], max);

        resultArray[i] = max;
    }

    return resultArray[len - 1];
}

console.log(solution([1, -2, 0, 9, -1, -2]));

