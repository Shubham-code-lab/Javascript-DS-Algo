function smallerNumbersThanCurrent(nums: number[]): number[] {
    const sortedNums = nums.slice().sort((a, b) => a - b);    //copy of array
    const lookUpMap:any = new Map();
    sortedNums.forEach((num,i)=>{
        if(!lookUpMap.has(num)){
            lookUpMap.set(num, i);
        }
    })
    const res:number[] = [];
    nums.forEach((num,i)=>{
        res.push(lookUpMap.get(num));
    });
    return res;
};
