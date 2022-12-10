// import readline from 'readline'
const readline = require('readline');

// let a = readline.createInterface(                           //terminate process.stdin
//     process.stdin, process.stdout);

// let b = 67;
// a.question("what is your age", (age)=>{
//     console.log("i am b",b);
//     console.log(typeof age);
//     b= age
//     a.close();
// })
// console.log("i am b",b);

//OR 

// a.setPrompt(`What is your age? `);
// a.prompt()
// a.on('line', (age) => {
//     console.log(`Age received by the user: ${age}`);
//     a.close();
// });

// console.log("hii");
// console.log(a);



// process.stdout.write("Hello world");

// node userInput "hii" 
// console.log(process.argv[2])


let input = "";
let count = 0;
process.stdin.on('data', data => {
    // console.log(`You typed ${data.toString()}`);
       input += data;
    if(count++>=2){
    process.exit();                              //otherwise for each enter it execute again 
    }
});

// process.on('end', () => {
//     console.log("end",input);
//   });

process.stdin.on('end', function(){
    process.stdout.write('\n end \n');
    // process.exit();
});

//when process exit is called
process.on('exit', () => {   //when process.exit() or ctrl+c 
    console.log(input.trim().split('\n'));
    input = input.trim().replace(/\r?\n|\r/g, " ")
    console.log(input);
});

// process.stdin.on('readable', () => {
//     let chunk;
//     // Use a loop to make sure we read all available data.
//     while ((chunk = process.stdin.read()) !== null) {
//      process.stdout.write(`data: ${chunk}`);
//     }
//   });