const same1 = function(arr1, arr2){              //Not Efficient
    if(arr1.length !== arr2.length)
        return false;

    for(let index=0;index<arr1.length;index++){
        const corretIndex = arr2.indexOf(arr1[index]**2);
        if(corretIndex === -1)
            return false;
        arr2.splice(corretIndex,1);
    }
    return true;
}

const same2 = function(arr1, arr2){              //Efficient
    if(arr1.length !== arr2.length)
        return false;
    
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for(let element of arr1){
        frequencyCounter1[element] = (frequencyCounter1[element] || 0) + 1;
    }
    for(let element of arr2){
        frequencyCounter2[element] = (frequencyCounter2[element] || 0) + 1;
    }
    
    for(let key in frequencyCounter1){
        if(!(key**2 in frequencyCounter2))
            return false;
        if(frequencyCounter2[key**2] !== frequencyCounter1[key])
            return false;
    }
    return true;
}

const anagram = function(str1, str2){
    if(str1.length !== str2.length)
        return false;
    
    let frequencyCounter1 = {};
    for(let element of str1){
        // frequencyCounter1[element] = (frequencyCounter1[element] || 0) + 1;
        // OR
        frequencyCounter1[element] ? frequencyCounter1[element]++ : frequencyCounter1[element] = 1;
    }
    
    for(let char of str2){
        // if(!(frequencyCounter1[char] && frequencyCounter1[char] > 0))
        //OR
        if(!frequencyCounter1[char])     //zero OR undefine  
            return false;
        else frequencyCounter1[char]--;
    }
    return true;
}

console.log(same2([1,2,3,4], [9,1,16,4]))
console.log(anagram("stringss", "ginsrtss"));
