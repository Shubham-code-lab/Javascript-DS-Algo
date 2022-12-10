
const canSum = (arrs, sum)=>{
    if(sum < 0)
        return false;
    if(sum == 0)
        return true;
    for(let arr of arrs){
        if(canSum(arrs, sum-arr))
            return true;
    }
    return false;
}

const canSum2 = (arrs, sum, memo={})=>{
    if(sum in memo)return memo[sum];
    if(sum < 0)return false;
    if(sum == 0)return true;
    for(let arr of arrs){
        memo[sum] = canSum2(arrs, sum-arr, memo);
        if(memo[sum])
            return true;
    }
    return false;
}


process.stdin.setEncoding('utf-8')
let input = "";
process.stdin.on('data', chuck=>{
    input += chuck;
})

process.on('SIGINT', ()=>{
    let num  = +input.split('\n')[0].trim();
    let arrs = input.split('\n')[1].trim().split(' ');
    arrs = arrs.map(arr=>{ return parseInt(arr)})
    console.log(canSum2(arrs, num));
    process.exit();
})