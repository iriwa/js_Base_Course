// 1. Среди трех чисел найти среднее арифметическое. Если среди чисел есть равные, вывести сообщение "Ошибка". Числа принять от пользователя.

var a = +prompt("Введите число a");
var b = +prompt("Введите число b");
var c = +prompt("Введите число c");

sum = ((a+b+c) / 3);
 alert(sum);

 if (a===b || a===c || b===c) {
     alert("Ошибка");
 }
// Считает, Ошибку показывает после 


