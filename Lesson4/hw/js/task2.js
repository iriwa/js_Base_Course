// 2.	Создать функцию, возводящую число в степень, число и сама степень вводится пользователем
// 		Проверить числа на корректность



function getPow(a, b) {
    var result = a;

    for (var i = 1; i < b; i++) {
        result *= a;
      }
    
      return result;
    }

var a = +prompt("Введите число: ");
var b = +prompt("Введите степень числа: "); 
        
    if (b < 1) {
      alert(`Степень ${b} не поддерживается, используйте натуральное число`);
    } else {
      alert( getPow(a, b) );    
}

