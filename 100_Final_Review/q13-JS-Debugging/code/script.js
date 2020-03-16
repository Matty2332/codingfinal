var firstNum = document.getElementById("first")
var secondNum = document.getElementById("second")
var btn = document.querySelector("input[type='submit']")
var msg = document.querySelector("#message")

btn.addEventListener('click', () =>{

   let answer = multiply(firstNum.value, secondNum.value)
   msg.innerText = `The answer is ${answer || 'nope'}`
}, false);

function multiply(a, b) {return a * b;};
