// 6.	Напишите функцию, которая сгенерирует массив рандомных чисел (кол-во элементов в массиве вводит пользователь) от -10 до 10
// 			Определите наименьшее и наибольшее число в массиве.
// 			Массив, минимальное и максимальное число - вывести в консоль.

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

function getMinMax() {
    var array = [];
    var num = +prompt("Введите количество элементов от -10 до 10");

    for (var i = 0; i < num; i++) {
        var randomNumber = getRandomArbitrary(-10, 10);
        array.push(randomNumber);
    }
    console.log(array);
    
var max = 0;
var min = 0;
for (i = 1; i < array.length; i++) {
    if (array[i] > max) max = array[i];
    if (array[i] < min) min = array[i];
}
    console.log("Min " + min + "; Max " + max);
}


getMinMax();
