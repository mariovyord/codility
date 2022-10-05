function solution(arr) {
    const lastIndex = arr.length - 1;
    let currentPassing = 0;
    let result = 0;

    for (let i = lastIndex; i >= 0; i--) {
        const currentCar = arr[i];
        if (currentCar === 0) {
            result += currentPassing;
        } else {
            currentPassing++;
        }
    }

    if (result > 1_000_000_000)
        return -1;

    return result;
}

console.log(solution([0, 1, 0, 1, 1]));