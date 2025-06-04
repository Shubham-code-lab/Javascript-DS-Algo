//time :- O(n)
//space :- O(n)

function twoSum(nums: number[], target: number): number[] {
    const lookUpMap:any = new Map();
     
    for(let i = 0;i <= nums.length;i++){
        const missingAdder =  target - nums[i];
        if(lookUpMap.has(nums[i]))
            return [lookUpMap.get(nums[i]), i];
        else lookUpMap.set(missingAdder, i);
    }
};
