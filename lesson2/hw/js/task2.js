// 2. Построить прямоугольный треугольник состоящий из символа "*".
//     Запросить у пользователя число, к примеру - 4

//     *
//     **
//     ***
//     ****
 var i = +prompt("Введите число 5");

 for(var i = 1; i < 5; i++){
    for(var j = 1; j <= i; j++){
        document.write('*');
    }
    document.write('<br/>');
}

// var i = +prompt("Введите число" +b);
//     var b;

// for (var i = 1; i < b; i++) {
//     for (var j = 1; j < i; j <= i) {
//         document.write('*');
//     }
//         document.write('<br/>');
// }
