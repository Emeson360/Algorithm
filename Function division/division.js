function divide(dividend, divisor, nr=0, result="") {

  // if (divisor == 0) {
  //     console.log("undefine");
  //     let notDefined = document.getElementById("demo").innerHTML;
  //     notDefined = "undefine";
  //     return parseFloat(result);
  // }

  if (nr > 10) {
      return parseFloat(result);
  }
  else {
      let quotient = 0;
      while (dividend >= divisor) {
          dividend -= divisor;
          quotient++;
      }

      if (dividend !== 0) {
          if (nr == 0) {
              result = quotient + ".";
          }
          else {
              result += quotient;
          }
          return divide(dividend * 10, divisor, nr + 1, result);
      }
      else {
          return parseFloat(result + quotient);
      }
  }
}

console.log(divide(10,0));
document.getElementById("demo").innerHTML = divide(10,0);