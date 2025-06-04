function missingNumber(nums: number[]): number {
    const actualSum = Array(nums.length + 1).fill(0).map((_,i)=>i).reduce((acc, curr)=>(acc+curr),0);
    const totalSum = nums.reduce((acc, curr)=>(acc+curr),0);
    return actualSum - totalSum;
};
