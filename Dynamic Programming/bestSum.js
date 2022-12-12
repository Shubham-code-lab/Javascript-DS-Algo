const bestSum1 = function(sum, arrs){
    if(sum < 0)return null;
    if(sum === 0) return [];
    let shortestCombination = null;
    for(let arr of arrs){
        let nextSum = sum-arr;
        let nextRes = bestSum1(nextSum, arrs);
        if(nextRes){
            const combination = [...nextRes, arr];
            if(!shortestCombination || combination.length < shortestCombination.length)
                shortestCombination = combination;
        }
    }
    return shortestCombination;
}

const bestSum2 = function(sum, arrs, memo={}){
    if(sum in memo)return memo[sum];
    if(sum < 0)return null;
    if(sum === 0) return [];
    let shortestCombination = null;
    for(let arr of arrs){
        let nextSum = sum-arr;
        memo[nextSum] = bestSum2(nextSum, arrs, memo);
        if(memo[nextSum]){
            const combination = [...memo[nextSum], arr];
            if(!shortestCombination || combination.length < shortestCombination.length)
                shortestCombination = combination;
        }
    }
    return shortestCombination;
}


process.stdin.setEncoding('utf-8')
let input = '';
process.stdin.on('data', chunk=>{
    input += chunk;
})
process.on('SIGINT', ()=>{
    let sum = +input.trim().split('\n')[0]
    let  arrs = input.trim().split('\n')[1].split(' ').map(el=>parseInt(el))
    console.log(bestSum2(sum, arrs));
    process.exit();
})
