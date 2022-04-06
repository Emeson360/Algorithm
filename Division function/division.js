var remainder;

    //function to divide a by b
    function divide(dividend,divisor) {

      //calculate the sign of the quotient
      var sign = ((dividend < 0) || (divisor < 0))? -1 : 1;

      dividend = Math.abs(dividend);
      b = Math.abs(divisor);

      var quotient = 0;
      console.log(quotient);


      while (dividend >= divisor) {
        dividend -= divisor;
        quotient++;
      }

      remainder = dividend;
   
      return quotient * sign;
      
      // if (dividend == 0) {
      //   document.getElementById("demo").innerHTML = 0;
      // }

      

    }

    var a = 10;
    var b = 6;

    var Result = divide(a, b);

    document.getElementById("demo").innerHTML = Result + " R " + remainder;

    if (b == 0) {
        document.getElementById("demo").innerHTML = "undifine";
    }