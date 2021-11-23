// 5.	Напишите функцию, которая сгенерирует массив рандомных чисел (на 10 элементов) от -10 до 10
// 			Выведите массив в консоль
// 			Посчитайте сумму позитивных чисел из массива и выведите ее в консоль

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function getPositivSome() {
    var array = [];

    for (var i = 0; i < 10; i++) {
        var randomNumber = getRandomArbitrary(-10, 10);
        array.push(randomNumber);
    }
    console.log(array);
    
    var sum = 0;
    for (var i = 0; i < 10; i++) {
        if (array[i] > 0) {
            sum += array[i];
        }
    }
    console.log(sum);
}

getPositivSome();
