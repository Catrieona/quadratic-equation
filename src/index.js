module.exports = function solveEquation(equation) {
  let [a,b,c] = equation.replace(/x\^2| /gi,'').match(/-?\d+/gi)
  
  let disc = (b * b) - 4 * (a * c)
  
  return [Math.round((-b + Math.sqrt(disc)) / (2 * a)),Math.round((-b - Math.sqrt(disc)) / (2 * a))].sort((a,b)=> a-b)
}
