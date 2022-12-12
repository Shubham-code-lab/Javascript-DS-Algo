//remember to conver mid to integer because any arithmatic division operation result in floating point number
//start <= end  is same as start > end   //also <= equal becoz start and mid can have same index // (start index 5+ end index 5)/2 = mid 5
//

const iterativeBinarySearch = function(arrs, num){
    let start = 0;
    let end = arrs.length-1;
    while(start <= end){
        let mid =  Math.floor(start + (end-start)/2);         //to avoid maximum value integer can store 
        if(arrs[mid] == num)return mid;
        else if(num < arrs[mid])end = mid-1;
        else start = mid +1;
    }
    return -1;
}

const recursiveBinarySearch = function(arrs, num, start=0, end=arrs.length){
    if(start > end)return -1;                               //(start > end) is same as (start <= end)
    let mid = Math.floor(start + (end - start)/2);             //to avoid maximum value integer can store 
    if(arrs[mid] == num)return mid; 
    else if(num < arrs[mid])return recursiveBinarySearch(arrs, num, start, mid-1)
    else return recursiveBinarySearch(arrs, num, mid+1, end)
}

const leftMostOccurrence = function(arrs, num){
    let start = 0;
    let end = arrs.length -1;
    let leftMost = -1;
    while(start <= end){
        let mid = Math.floor(start + (end - start)/2);
        if(arrs[mid] === num){
            leftMost = mid;               //continue search that number in left part
            end = mid-1;
        }
        else if(arrs[mid] > num)end = mid-1;
        else start = mid + 1;
    }
    return leftMost;
}

const rightMostOccurrence = function(arrs, num){
    let start = 0;
    let end = arrs.length -1;
    let rightMost = -1;
    while(start <= end){
        let mid = Math.floor(start + (end - start)/2);
        if(arrs[mid] === num){
            rightMost = mid;                 //continue search that number in right part
            start = mid+1;
        }
        else if(arrs[mid] < num)start = mid+1;
        else end = mid - 1;
    }
    return rightMost;
}

const countOccurrence = function(arrs, num){
    let count = 0;
    let leftMostIndex = leftMostOccurrence(arrs, num);
    let rightMostIndex = rightMostOccurrence(arrs, num);
    if((leftMostIndex >= 0) && (rightMostIndex >= 0)){   //might be present in 0th index so = to 0
        count  = rightMostIndex - leftMostIndex + 1;  
    }
    return count;
}   


const totalRotation = function(arrs){
    let start = 0;
    let end = arrs.length - 1;
    while(start <= end){
        let mid = start + (end-start)/2;
        if(arrs[start] > arrs[mid] && arrs[mid] < arrs[end])return mid;      //pivot point
        else if(arrs[start] > arrs[mid])start = mid + 1;
        else end = mid - 1;
    }
}

const searchInRatatedArray = function(arrs, num){
    let start = 0;
    let end = arrs.length-1;
    while(start <= end){
        let mid = Math.floor(start + (end- start) /2);
        if(arrs[mid] == num)return mid;
        else if(arrs[start] < arrs[mid]){ //left sorted
            if(arrs[start] <= num && num < arrs[mid]){   //element at mid is check but not at start  so <=
                end = mid-1;
            }
            else start = mid +1;          //when not in left sorted
        }
        else {                            //right sorted
            if(arrs[mid] < num && num <= arrs[end]){     //element at mid is check but not at end  so <=
                start = mid + 1;
            }
            else end = mid - 1;           //when not in right sorted
        }
    }
}

let input = '';
process.stdin.setEncoding('utf-8')
process.stdin.on('data', chunk =>{
    input += chunk;
})
process.on('SIGINT', ()=>{
    let num = +input.trim().split('\n')[0]
    let arrs = input.trim().split('\n')[1].split(' ').map(arr=>parseInt(arr))
    console.log(iterativeBinarySearch(arrs,num));
    console.log(recursiveBinarySearch(arrs,num));
    console.log(countOccurrence(arrs,num));
    process.exit()
})

console.log(totalRotation([6,7,8,9,1,2,3,4,5]));
console.log(searchInRatatedArray([6,7,8,9,1,2,3,4,5], 6));