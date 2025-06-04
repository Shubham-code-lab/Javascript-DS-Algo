function findDisappearedNumbers(nums: number[]): number[] {
    const uniqueList = new Set([...nums]);
    return Array(nums.length).fill(0).map((_,i)=>(i+1)).filter(num=>!uniqueList.has(num));
};
