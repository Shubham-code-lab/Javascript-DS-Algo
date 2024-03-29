let selectSort = function(arrs){
    let arrayLength = arrs.length;
    for(let i = 0;i<arrayLength;i++){
        let min = i;
        for(let j = i+1; j< arrayLength; j++){
            if(arrs[min] > arrs[j])min = j;
        }
        [arrs[i] , arrs[min]] = [arrs[min], arrs[i]];
    }
    return arrs;
}

let bubbleSort = function(arrs){
    let arrayLength = arrs.length;
    for(let i = 1; i<arrayLength; i++){
        let flag = false;
        for(let j = 0; j < arrayLength - i; j++ ){  //after all iteration it is gaurantee that one element at end is sorted so j < arraylength-i
            if(arrs[j] > arrs[j+1]){
                [arrs[j], arrs[j+1]] = [arrs[j+1], arrs[j]]  //sort consecative element j and j+1
            }
        }
        if(flag) break;    //if no swapping is done array is sorted so break tiny optimization
    }
    return arrs;
}

let insertSort = function(arrs){
    let arrayLength = arrs.length;
    for(let i = 1; i< arrayLength;i ++){       // i = 1 as we check for hole-1 later
        let hole = i;
        let value = arrs[i];
        while(hole > 0 && arrs[hole-1] > value){    //store minu=imun value in value varible and copy i-1 th element to i until if i index value is bigger than value variable
            arrs[hole] = arrs[hole-1];
            hole--;
        }
        arrs[hole] = value;
    }
    return arrs;
}

let sortArrays = function(arrs, left, right){
    let rootPosition = 0;
    let leftPosition = 0;
    let rightPosition = 0;
    let leftLength = left.length;
    let rightLength = right.length;
    
    while (leftPosition < leftLength && rightPosition < rightLength){
        if(left[leftPosition] < right[rightPosition])arrs[rootPosition++] = left[leftPosition++];
        else arrs[rootPosition++] = right[rightPosition++];
    }
    while(leftPosition < leftLength)arrs[rootPosition++] = left[leftPosition++];
    while(rightPosition < rightLength)arrs[rootPosition++] = right[rightPosition++];
}

let mergeSort = function(arrs){
    let arrayLength = arrs.length;
    if(arrayLength < 2)return;            //if one element return
    let mid = Math.floor(arrayLength/2);
    let left = arrs.slice(0,mid);
    let right = arrs.slice(mid,arrayLength);
    mergeSort(left);          //left is same arrs for next recursive function call      soo update happen 
    mergeSort(right);         //right is same arrs for next recursive function call      soo update happen
    sortArrays(arrs, left, right);  //arrs is updated which might be left or right of previous function call
    return arrs;
}

let partition = function(arrs, start, end){
    let pivot = arrs[end];
    let pIndex = start;
    for(let i= start;i<end;i++){  //[end] is pivot
        if(arrs[i] < pivot){
            [arrs[pIndex], arrs[i]] = [arrs[i], arrs[pIndex]]
            pIndex++;
        }
    }
    [arrs[pIndex], arrs[end]] = [arrs[end], arrs[pIndex]];
    return pIndex;
}

let quickSort = function(arrs, start=0 , end=arrs.length-1){
    if(start < end){   //start =1, end =1   //start =1 end =0 
        let pIndex = partition(arrs, start, end);
        quickSort(arrs, start, pIndex - 1);
        quickSort(arrs, pIndex + 1 , end);
    }
}

let input = '';
process.stdin.setEncoding('utf-8')
process.stdin.on('data', chunk =>{
    input += chunk;
})
process.on('SIGINT', ()=>{
    let arrs = input.trim().split(' ').map(arr=>parseInt(arr))
    // console.log(selectSort(arrs));
    // console.log(bubbleSort(arrs));
    // console.log(insertSort(arrs));
    // console.log(mergeSort(arrs));
    quickSort(arrs);
    console.log(arrs);
    process.exit()
})
