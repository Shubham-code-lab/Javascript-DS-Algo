let canConstruct1 = function(str, strArrs){
    if(!str)return true;
    for(let strArr of strArrs){
        if(strArr === str.slice(0,strArr.length)){
            if(canConstruct1(str.slice(strArr.length), strArrs))return true;
        }
    }
    return false;
}

let canConstruct2 = function(str, strArrs, memo={}){
    if(str in memo)return memo[str];
    if(!str)return true;
    for(let strArr of strArrs){
        if(strArr === str.slice(0,strArr.length)){
            nextStr = str.slice(strArr.length);
            memo[nextStr] = canConstruct2(nextStr, strArrs,memo)
            if(memo[nextStr])return true;
        }
    }
    return false;
}

let input = ""
process.stdin.setEncoding('utf-8');
process.stdin.on('data', chunk=>{
    input += chunk;
})

process.on('SIGINT', ()=>{
    let str = input.trim().split('\n')[0].trim();
    let strArrs = input.trim().split('\n')[1].split(' ')
    console.log(canConstruct2(str,strArrs))
    process.exit();
})
