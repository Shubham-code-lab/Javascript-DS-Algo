
const maxSubarraySum1 = function(arr, num){
    if(arr.length < num) return null

    let max_sum = -Infinity;
    for(let i = 0 ; i < arr.length - num + 1; i++){         //O(i*num)
        let temp = 0;
        for(let j = 0; j < num; j++){       
            temp += arr[i+j];           
        }
        if(temp > max_sum) max_sum = temp;
    }
    return max_sum
}

const maxSubarraySum2 = function(arr, num){
    if(arr.length < num) return null;
    
    let max_sum = 0;
    let current_sum = 0;
    for(let i = 0; i<num; i++){
        max_sum += arr[i];
    }
    current_sum = max_sum;
    for(let i=num; i < arr.length; i++){                         //O(n)
        current_sum = current_sum - arr[i-num] + arr[i];         //minus starting arr[i-num] element of window and add ending arr[i] to new sum
        max_sum = Math.max(max_sum, current_sum);
    }
    return max_sum;
}

console.log(maxSubarraySum1([1,2,5,2,8,1,5],4));
console.log(maxSubarraySum2([1,2,5,2,8,1,5],4));

