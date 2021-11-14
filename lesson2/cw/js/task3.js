// 3. Перепишите с тернарным оператором
   
var a =  +prompt("Введите число");        
var b = +prompt("Введите число");
var max;
            // if (a > b) {
            //     max = a;
            // } else {
            //     max = b;
            // }
            

max = (a > b) ? a + " a": "b " + b;
console.log(max);