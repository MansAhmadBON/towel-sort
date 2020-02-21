// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!Array.isArray(matrix) || matrix.length === 0) {
        return [];
    } else {
        var resultArr = [];
        for (let i = 0; i < matrix.length; i++) {
            let currentArr = matrix[i];
            if (i % 2 === 0) {
                resultArr.push(currentArr);
            } else {
                let sortCurrentArr = currentArr.sort((a, b) => b - a);
                resultArr.push(sortCurrentArr);
            }
        }
        let str = resultArr.toString().replace(/[^-0-9]/gim, " ");
        return str.split(" ").map(e => Number(e));
    }
};
