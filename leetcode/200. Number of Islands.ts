//array can be used as deque

function numIslands(grid: string[][]): number {
    if (!grid || grid.length === 0) return 0;
    let islandCount = 0;
    const gridVisit = grid.map(row => row.map(() => false));


    const bfs = function (i, j, gridVisit) {
        gridVisit[i][j] = true;
        const deque = [[i, j]];
        const directions = [[0, -1], [1, 0], [0, 1], [-1, 0]];
        while (deque.length > 0) {
            const [currI, currJ] = deque.shift();
            for (let dirI = 0; dirI < directions.length; dirI++) {

                const [posI, posJ] = [currI + directions[dirI][0], currJ + directions[dirI][1]];
                if (posI >= 0 && posI < grid.length && posJ >= 0 && posJ < grid[0].length && grid[posI][posJ] === "1" && !gridVisit[posI][posJ]) {
                    deque.push([posI, posJ]);
                    gridVisit[posI][posJ] = true;
                }
            }
        }
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === "1" && !gridVisit[i][j]) {
                bfs(i, j, gridVisit);
                islandCount++;
            }
        }
    }
    return islandCount;
};
