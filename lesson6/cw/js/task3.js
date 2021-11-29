// 3.	Заменить все элементы

// 			Напишите функцию replaceAll, которая принимает первым параметром массив элементов, вторым параметром - элемент, который нужно заменить и третьим - элемент, который должен заменить второй элемент.
// 			Пример:
// 			 replaceAll(array: [1,2,2], old: 1, new: 2) // [2,2,2]

// с помощью indexOf получить индкс элемента old
// если его нет = ошибка
// если есть с помощью splice заменить old на elem

var array = [1, 2, 2];
function replaceAll(array, old, elem) {
    var a = array.indexOf(old);
    if(a === -1) {
        alert("Error");
        return;
    }
    array.splice(a, 1, elem); 
    return array;  
}
var result = replaceAll(array, 5, 4);
    console.log(result);	