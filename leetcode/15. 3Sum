function threeSum(nums: number[]): number[][] {
  //sort to overcome duplicate output when dealing with duplicate input
  nums.sort((a,b)=>a-b)
  const result = [];

    //brutte force
    
//    for (let i = 0; i < nums.length - 2; i++) {
//     if (i > 0 && nums[i] === nums[i - 1]) continue;

//         for (let j = i + 1; j < nums.length - 1; j++) {
//         if (j > i + 1 && nums[j] === nums[j - 1]) continue;

//         for (let k = j + 1; k < nums.length; k++) {
//             if (k > j + 1 && nums[k] === nums[k - 1]) continue;

//             if (nums[i] + nums[j] + nums[k] === 0) {
//             result.push([nums[i], nums[j], nums[k]]);
//             }
//         }
//         }
//     }

    for (let i = 0; i < nums.length; i++) {
        if(i > 0 && nums[i-1] === nums[i])continue;
        let left = i + 1; 
        let right = nums.length - 1;
        while(left < right){
            const currentSum = nums[i] + nums[left] + nums[right];
            if(currentSum === 0){
                result.push([nums[i] , nums[left] , nums[right]]);
                while(left < right && nums[left] === nums[left+1])left++;
                while(left < right && nums[right] === nums[right-1])right--;

                left++;
                right--;
            }
            else if(currentSum > 0){
                right--;
            }
            else if (currentSum < 0){
                left++;   
            }
        }
    }
    return result;
};
