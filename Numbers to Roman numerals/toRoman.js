/*
        function integer_to_roman(num) {
        if (typeof num !== 'number') 
        return "please enter a number"; 

        var digits = String(+num).split(""),
        key = [//"","X̅","L̅","C̅","D̅","M̅",
        //"","M","MM","MMM","I̅V̅","V̅","V̅I̅","V̅I̅I̅","V̅I̅I̅I̅","I̅X̅",
        "","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
        "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
        "","I","II","III","IV","V","VI","VII","VIII","IX"],
        roman_num = "",
        i = 3;
        while (i--)
        roman_num = (key[+digits.pop() + (i * 10)] || "") + roman_num;
        return Array(+digits.join("") + 1).join("M") + roman_num;
        }

        console.log(integer_to_roman(43678)); */


        function toRoman(n) {
          if (isNaN(n) || n < 1 ||  n > 99999999) {
            return "Enter a number between 1 and 99,999,999"; 
          }
    
                var r = '',
                decimals = [1000000,500000,100000,50000,10000, 9000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
                roman = ['M̅','D̅','C̅','L̅','X̅','I̅X̅', 'V̅I̅I̅I̅', 'V̅I̅I̅', 'V̅I̅', 'V̅', 'I̅V̅', 'MMM', 'MM', 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    
                for (var i = 0; i < decimals.length; i++) {
                    while (n >= decimals[i]) {
                        r += roman[i];
                        n -= decimals[i];
                    }
                }
                return r;
            }
    
            console.log(toRoman(436));
    
    
    
    
            /*
            function toArabic(n) {
                var r = '',
                // decimals = [1000000,500000,100000,50000,10000, 9000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
                // roman = ['M̅','D̅','C̅','L̅','X̅','I̅X̅', 'V̅I̅I̅I̅', 'V̅I̅I̅', 'V̅I̅', 'V̅', 'I̅V̅', 'MMM', 'MM', 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
                decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
                roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
                for (var i = 0; i < roman.length; i++) {
                    while (n >= roman[i]) {
                        r += decimals[i];
                        n -= roman[i];
                    }
                }
                return r;
            }
    
            console.log(toArabic('L')) */
    