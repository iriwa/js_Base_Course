// 6. (*) Для задания 3 создать метод, позволяющий отсортировать массив сотрудников по одному из свойств: name, sName, age, occupation, salary.
//        Параметр для сортировки принимается от пользователя.
//        После выполнения функции — вывести информацию о сотрудниках.

//        // sort(function(a, b) { return a > b });
//        // 1, 2, 3, 5, 10, 14
//        // 1, 10, 14, 2, 3,

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

function addSalary(arr) {
    for (var i= 0; i < arr.length; i++) {
        if(arr[i].occupation == "director") {
          arr[i].salary = 3000;
        } else if(arr[i].occupation == "manager") {
          arr[i].salary = 1500;
        } else if(arr[i].occupation == "programmer") {
          arr[i].salary = 2000;
        }  else {
            arr[i].salary = 1000;
          };
      }
    console.log(arr);
}

addSalary(company);


var key = prompt("Введите параметр для сортировки сотрудников (name, sName, age, occupation): ");
company.sort(function (a, b) { return a[key] > b[key] ? 1: -1});
        console.log(company);