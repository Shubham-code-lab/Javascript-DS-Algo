const sumZero = function(sortedArr){
    let left = 0;
    let right = sortedArr.length-1;
    while(left<right){            //0-0 is avoided  so we don't write left<=right
        let sum = sortedArr[right] + sortedArr[left];
        if(sum == 0) return [sortedArr[left], sortedArr[right]];
        else if(sum > 0)right--;
        else left++;
    }
}

const countUniqueValues = function(arr){
    if(arr.length == 0) return 0;
    
    let i = 0;
    for(let j = i+1; j < arr.length ; j++){
        if(arr[i] !== arr[j]){
            arr[++i] = arr[j];
        }
    }
    return i+1;
}

console.log(sumZero([-9,-8,-6,-3,-1,0,1,6,10,11,12,13]));
console.log(countUniqueValues([1,1,1,1,1,2,2,2,2,3,4]));