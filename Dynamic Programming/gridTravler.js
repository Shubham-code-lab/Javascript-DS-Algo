const gridTravler1 = function(m, n){
    if(m==1 && n==1)
        return 1;
    if(m ==0 || n == 0)
        return 0;
    return gridTravler1(n,m-1) + gridTravler1(n-1, m);
}

const gridTravler2 = function(m, n, memo = {}){
    const key = m + ',' + n;
    if(key in memo){
        return memo[key]
    }
    if(m === 1 && n === 1)  return 1;
    if(m === 0 || n === 0) return 0;
   
    memo[key] = gridTravler2(m,n-1, memo) + gridTravler2(m-1,n, memo);
    return memo[key]; 
}

process.stdin.setEncoding('utf-8');
let input = "";
process.stdin.on('data', chunk=>{
    input = chunk;
})

process.on('SIGINT', ()=>{
    let [m,n] = input.trim().split(' ');
    console.log(m,n);
    // console.log(gridTravler1(+m,+n));
    console.log(gridTravler2(+m,+n));
    process.exit();
})