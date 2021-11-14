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

// var a = +prompt("Введите число");

//  for(var i = 1; i < a; i++){
//     for(var j = 1; j <= i; j++){
//         document.write('*');
//     }
//     document.write('<br/>');
// }
