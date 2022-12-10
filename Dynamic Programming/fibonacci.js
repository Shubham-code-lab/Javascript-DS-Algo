
const fib1 = (num)=>{          //O(2^n)
    if(num <= 2)
        return 1;
    return fib1(num-2) + fib1(num-1);
}

const fib2 = (num, memo = {})=>{      //
    if(memo[num]) return memo[num];
    if(num <= 2) return 1;
    memo[num] = fib2(num-1, memo) + fib2(num-2, memo);
    return memo[num];
}


// process.stdin.resume();
process.stdin.setEncoding('utf8');
let temp = 0;
process.stdin.on('data', function(chunk) {
  process.stdout.write('data: ' + chunk);
  temp = chunk;
//   console.log(fib1(parseInt(chunk.trim())));
});

process.on('SIGINT', function(){
    console.log(fib2(parseInt(temp.trim())));
    process.exit();
});