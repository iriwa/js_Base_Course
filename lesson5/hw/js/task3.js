// 3. Создать два произвольных массива: 
//         один массив - любимая спортивная команда / модели автомобилей / города, 
//         во втором - количество игроков в команде / объем двигателя / количество жителей в городе.
// 		Из двух массивов сделайте ассоциативный массив (объект).
// 		Массив, который будет выступать в качестве ключа - должен содержать уникальные значения
		
// 		Например:
// 		let keys = ["id", "name"];
// 		let values = [1, "Vlad"];
		
// 		В результате должно получится следующее:
// 		{
// 			"id": 1,
// 			"name": "Vlad"
// 		}

var city = ["Kyiv", "Odessa", "Lviv"];
var population = ["2 962 180 people", "1 015 826 people", "721 510 people"];

var map = [];
for (var i = 0; i < city.length; i++) {
    var obj = {};
        obj.city = city[i];
        obj.population = population[i];
        map.push(obj);       
}
 
console.log(map);

// var map = {
//     "Kyiv": "2 962 180 people",
//     "Odessa": "1 015 826 people",
//     "Lviv": "721 510 people"
// }
// console.log(map);

// var map = city.concat(population);

// console.log(city);

