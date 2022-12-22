const processInput = (input) => {
    console.log(`Received input: ${input}`);
    // Perform some action with the input
  };
  
  let input = "";
  
  process.stdin.setEncoding("utf8");
  
  process.stdin.on("data", (chunk) => {
    input += chunk;
  });
  
  process.stdin.on("readable", () => {
    let chunk;
    while ((chunk = process.stdin.read()) !== null) {
      input += chunk;
    }
  });
  
  process.stdin.on("end", () => {
    processInput(input);
  });
  
  process.stdin.resume();
  