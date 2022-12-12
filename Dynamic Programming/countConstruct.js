let countConstruct1 = function(str, strArrs){
    if(!str)return 1;
    let totalCount = 0;
    for(let strArr of strArrs){
        if(strArr === str.slice(0,strArr.length)){
            let nextRes = countConstruct1(str.slice(strArr.length), strArrs);
            totalCount+=nextRes;
        }
    }
    return totalCount;
}

let countConstruct2 = function(str, strArrs, memo={}){
    if(str in memo)return memo[str];
    if(!str)return 1;
    let totalCount = 0;
    for(let strArr of strArrs){
        if(strArr === str.slice(0,strArr.length)){
            let nextStr = str.slice(strArr.length);
            memo[nextStr] = countConstruct2(nextStr, strArrs, memo);
            totalCount+=memo[nextStr];
        }
    }
    return totalCount;
}

let input = ""
process.stdin.setEncoding('utf-8');
process.stdin.on('data', chunk=>{
    input += chunk;
})

process.on('SIGINT', ()=>{
    let str = input.trim().split('\n')[0].trim();
    let strArrs = input.trim().split('\n')[1].split(' ')
    console.log( countConstruct2(str,strArrs))
    process.exit();
})