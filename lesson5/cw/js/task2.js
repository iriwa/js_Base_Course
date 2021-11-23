// 2.  Создайте функцию, которая просматривает массив (первый аргумент) и возвращает первый элемент в массиве, который проходит проверку на истинность (второй аргумент). 
//         Если ни один элемент не проходит тест, вернуть undefined.

// запустить цикл
// на каждом элементе массива, вызвать функцию func
// если func = true, вернуть текущий элемент массива

function findElement(arr, func) {
    // var test = 0;
    // if(func(test)){
    //     return test;
    // }
    // return num;
    for (var i = 0; i < arr.length - 1; i++) {
        if(func(arr[i])){
            return arr[i];
        }      
    }
}
var specialFunc = function(num) {return num % 2 === 0};
// function(num) {return num % 2 === 0}

findElement([1, 2, 3, 4], specialFunc);
// findElement([1, 2, 3, 4], function(num) {return num % 2 === 0});