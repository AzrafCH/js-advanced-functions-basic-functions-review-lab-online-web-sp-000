// Your code here
function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office") {
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair='*') {
  return function(adjective) {
    return `You are ${flair}${adjective}${flair}!`
  }
}

let Calculator = {
  function add(num1, num2) {
    return  num1 + num2
  }

  function subtract(num1, num2) {
    return num1 - num2
  }
  function divide(num1, num2) {
    return num1 / num2
  }
  function multiply(num1, num2) {
    return num1 ** num2
  }
}
