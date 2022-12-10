process.stdin.resume();
process.stdin.setEncoding("ascii");
var input = "";
process.stdin.on("data", function (chunk) {
    // This is where we should take the inputs and make them ready.
    input += (chunk+"\n");
    // This function will stop running as soon as we are done with the input in the Stdin
});
process.stdin.on("end", function () {
    // When we reach here, we are done with inputting things according to our wish.
    // Now, we can do the processing on the input and create a result.
    process.stdout.write(input);
});