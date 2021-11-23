// 4. Создать массив, который будет хранить в себе информацию о сотрудниках предприятия. Каждый элемент масива — объект,
//        содержащий свойства: name, sName, age, occupation, и метод show, который выводит всю информацию о пользователе.
//        Реализовать заполнение массива пользователем. По окончанию заполнения — вывести информацию о сотрудниках.

var company = [];
    for (var i = 0; i < 3; i++) {
        var obj = {}
            obj.name = prompt("Введите имя сотрудника: ");
            obj.sName = prompt("Введите фамилию сотрудника: ");
            obj.age = +prompt("Введите возраст сотрудника: ");
            obj.occupation = prompt("Введите должность сотрудника: ");
            obj.show = function () {
            console.log("Имя сотрудника: " + obj.name + "\nФамилия сотрудника: " + obj.sName + "\nВозраст сотрудника: " + obj.age + "\nДолжность сотрудника: " + obj.occupation);
        }
        company.push(obj);
    }
    console.log(company);
    

// for (var i = 0; i < company.length; i++) {
//     company[i].show();
// }

// show: function() {
//     console.log("Имя сотрудника: " + this.name);
//     console.log("Фамилия сотрудника: " + this.sName);
//     console.log("Возраст сотрудника: " + this.age);
//     console.log("Должность сотрудника: " + this.occupation);
// }