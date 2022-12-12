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
    let rootPosition = 0,rootSize = arrs.length;
    while (rootSize > 0){
        
    }
}

let mergeSort = function(arrs){
    let arrayLength = arrs.length;
    if(arrayLength < 2)return;
    let mid = Math.floor(arrayLength/2);
    let left,right = [];
    for(let i=0;i<mid; i++)left.push(arrs[i]);
    for(let i=mid;i<arrayLength; i++)right.push(arrs[i]);
    mergeSort(left);
    mergeSort(right);
    sortArrays(arrs, left, right);
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

    process.exit()
})