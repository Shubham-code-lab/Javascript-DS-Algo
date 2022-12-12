//m is height which will increase when we substract 
//worst case 300 - 1 each time will result in zero but will extend tree height


const howSum1 = function(sum, arrs, res=[]){          //O(n^m * m)
    if(sum < 0) return null;
    if(sum === 0) return [];
    for(let arr of arrs){                              //n^m
        let nextRes = howSum1(sum-arr, arrs, res) 
        if(nextRes){
            return res.concat([...nextRes, arr])       //m        //copy worst case if element is 1     sum-1 each time will increase tree height
        }
    }
    return null;
}

const howSum2 = function(sum, arrs, res=[], memo={}){   //O(n*m^2)
    if(sum in memo) return memo[sum];
    if(sum < 0) return null;
    if(sum === 0) return [];
    for(let arr of arrs){                               //n*m
        let nextSum = sum-arr;
        memo[nextSum] = howSum2(nextSum, arrs, res, memo) 
        if(memo[nextSum]){
            return res.concat([...memo[nextSum], arr])    //m         //copy worst case if  element is 1     sum-1 each time will increase tree height
        }
    }
    return null;
}


process.stdin.setEncoding('utf-8')
let input = "";
process.stdin.on('data',  chuck=>{
    input += chuck;
})

process.on('SIGINT', ()=>{
    const sum = +input.split('\n')[0].trim();
    const arr = input.split('\n')[1].trim().split(' ');
    // console.log(howSum1(sum, arr))
    console.log(howSum2(sum, arr))
    process.exit();
})

