//we are finding biggest value first since it is on edge of the array as if we serach samllest value first will be worng since it can be on the middle of the array.

function sortedSquares(nums: number[]): number[] {
    let [leftPointer, rightPointer] = [0, nums.length - 1];
    const result = Array(nums.length).fill(0);
    let resultPos = nums.length - 1;

    while(leftPointer <= rightPointer){
        const [leftValue, rightValue] = [Math.abs(nums[leftPointer]), Math.abs(nums[rightPointer])];
        if(leftValue > rightValue){
            result[resultPos]= (leftValue * leftValue);
            leftPointer++;
        }
        else {
            result[resultPos]= (rightValue * rightValue);
            rightPointer--;
        }
        resultPos--;
    }
    return result;
};
