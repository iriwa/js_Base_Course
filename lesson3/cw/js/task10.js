
		// 10. Сумма введённых чисел

		// Создайте массив
		// Через цикл запрашивайте у пользователя цифры
		// Заканчивайте запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
		// Подсчитайте и верните сумму элементов массива.
		// P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».

        var myList = new Array();
        var elem;

        while (true) {
            var elem = prompt("Enter something:");
            if (isNaN(elem)) {
                break;
            }
            if (!elem) {
                break;
            }
            myList.push(+elem);
        }

        console.log(myList);


//     var arr = new Array();

//     do{
//         var num = prompt("Введите число");
//         // debugger;
//             if (num === ""|| num == null || isNaN(num)) {
//           break;
//         } 
 
//         arr.push(+num);       
//     } while (true);

// console.log(arr);

// typeof возврат