let allConstruct = function(str , strArrs){
    if(!str)return [[]];
    let possibleConstruct = [];
    for(let strArr of strArrs){
        if(strArr === str.slice(0, strArr.length)){
            let nextRes = allConstruct(str.slice(str.length), strArrs);
            if(nextRes){
                nextRes.forEach(res=> res.push(str))
                possibleConstruct = [...nextRes, strArr];
            }
    }
    }
    return possibleConstruct;
}

input= ""
process.stdin.setEncoding('utf-8')
process.stdin.on('data', chunk=>{
    input += chunk;
})
process.on('SIGINT', ()=>{
    str = input.trim().split('\n')[0];
    strArrs = input.trim().split('\n')[1].split(' ');
    console.log(allConstruct(str, strArrs));
    process.exit();
})