// 7.	Напишите функцию, которая проверяет, делится ли число на два других числа.
// 			Сигнатура метода:
// 			function isDivisible(num, x, y) {

// 			}

// 			num: 15
// 			x: 3
// 			y: 5

// 			=> 

// 			где num - проверяемое число,
// 				х - первое число для проверки,
// 				y - второе число для проверки

// 			Если num делиться на оба числа без остачи - вывести true
// 			Если num неделиться на оба числа - вывести "не делиться на х и у" (вместо х и у подставить соответствующие числа)
// 			Если num неделиться на одно из числе - вывести "не делиться на х|y" (вместо х и у подставить соответствующие числа)


function isDivisible(num, x, y) {
    var num = 15;
    var x = 3;
    var y = 5;

    if (num % x == 0, num % y == 0) {
        console.log("true");
    } else if(num % x == 1, num % y == 1) {
        console.log("не делиться на х и у");
    }else if(num % x == 1) {
        console.log("не делиться на х");
    }else {
        console.log("не делиться на y");
    }
    
}
 
isDivisible();
    
    