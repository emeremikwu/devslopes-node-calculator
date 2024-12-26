const { keyIn, questionFloat } = require("readline-sync");

let operatorCallback = {
  "/": (a, b) => a / b,
  "*": (a, b) => a * b,
  "+": (a, b) => a + b,
  "-": (a, b) => a - b
}


function calculate(operator, l_operand, r_operand) {
  return operatorCallback[operator](l_operand, r_operand)
}

let op = ""
let l = ""
let r = ""
const invalid_num_msg = "This is not a number"

console.log("What operation would you like to perform?")
while(!((op = keyIn("'/' '*' '-' '+':")) in operatorCallback))
  {
    console.log(`Invalid operation: ${op}\n`)
  }
  
l = questionFloat("Please enter the first number: ", {limitMessage: invalid_num_msg})
r = questionFloat("Please enter the second number: ", {limitMessage: invalid_num_msg})

console.log(`The result is : ${calculate(op, l, r)}`)

