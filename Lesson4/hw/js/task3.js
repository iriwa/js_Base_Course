// 3.	Допишите функцию, которая определит, парное ли число (решение должно быть в одну строку).
// 		Функция должна вернуть "Even" или "Odd";

// function isEven(num) {
//     if (num % 2 == 0) {
//         return "Even";
//     } else {
//         return "Odd";
//     }
// }
// isEven(); 

function isEven(num) {
    return ( num % 2 ) ? "odd" : "even";
  }

  isEven(); 