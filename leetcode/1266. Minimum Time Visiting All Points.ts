function minTimeToVisitAllPoints(points: number[][]): number {
    let [x1, y1] = points.pop();
    let res = 0;
    while(points.length > 0){
        const [x2, y2] = points.pop();
        res += Math.max(Math.abs(x2-x1) , Math.abs(y2-y1));
        [x1, y1] = [x2, y2];
    }
    return res;
};
