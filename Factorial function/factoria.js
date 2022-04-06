//using recursion approach
function factorialR(n) {
  if (n == 1) {
      return 1;
  }
  else {
      return n * factorialR(n - 1);
  }
}
console.log(factorialR(4));



//using loop approach
function factorialLoop (n) {
  let result = 1;
  
  for (let num = n; num >= 1; num--) {
      result *= num;
  }
  return result;

}
console.log(factorialLoop(4));


function summation (n){
  let result = 0;
  for (let index = n; index >= 1; index--) {
      result += 1 / (index ** 2);
  }

  return result;
}

function sumRec(n) {
  let res = 1
  if (n == 0 || n == 1) {
      return n
  } else {
      // res += 1/(n*sumRec(n-1))
      // res += 1/(n * (sumRec(n - 1) ** 2)) 
      // res += 1/sumRec((n - 1)**2)
      res += 1 / n * su 
      return res

  }

}

console.log(summation(2));
console.log(sumRec(2));