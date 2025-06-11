function spiralOrder(matrix: number[][]): number[] {
    let spiralList: number[] = [];
    while (matrix.length > 0) {
        spiralList.push(...matrix.shift());                    //spreed
        for (let i = 0; i < matrix.length; i++) {
            if (matrix[i].length > 0) {
                spiralList.push(matrix[i].pop());
            }
        }
        if (matrix.length > 0) {
            spiralList.push(...(matrix.pop()!.reverse()));    //spreed
        }

        for (let i = matrix.length - 1; i > -1; i--) {
            if (matrix[i].length > 0) {
                spiralList.push(matrix[i].shift());
            }
        }
    }
    return spiralList;
};
