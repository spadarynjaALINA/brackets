module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const closed = [];
  let top = stack[stack.length-1]
  const open = []
  for (let i = 0; i < bracketsConfig.length; i++) {
    closed.push(bracketsConfig[i][1]);
  }
  for (let i = 0; i < bracketsConfig.length; i++) {
    open.push(bracketsConfig[i][0]);
}
  for (let i = 0; i < str.length; i++) {
    let current = str[i]
  
    if (closed.includes(current)) {
      let index = closed.indexOf(current)
     if (stack[stack.length-1] === open[index] ) {
       stack.pop()
      }
      else {
        stack.push(current)
      }
    }
    else {
      stack.push(current)
    }
  }
   
  return stack.length === 0
}
