// 12*. Запросите у пользователя число и проверьте есть ли оно в массиве
// 			Если есть, то сколько раз встречается

    
var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function countIdentic(needle) {
    var finded = 0;
    for (var i = 0; i < myArray.length; i++) {
        if(myArray[i] == needle) {
            finded++;
        }
    }

    alert('найдено ' + finded + ' совпадений в массиве');
}


var num = +prompt("Введите число от 1 до 14");

countIdentic (num);

    