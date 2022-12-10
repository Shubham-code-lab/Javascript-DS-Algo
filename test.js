// for browser js

var a1 = "a1";
console.log(this)

{
    a2 = "a2"    
}

var a4 = ()=>{
   console.log(this)
   var a3 ="a3";
}

a4()

console.log(window.a1);
console.log(window.a2);
console.log(window.a3);
