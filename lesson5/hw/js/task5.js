// 5. Для предыдущего задания создайте функцию, которая будет принимать в себя массив объектов-сотрудников, и каждому из объектов
//        будет добавлять новое свойство "salary", хранящее зарплату сотрудника. 
//        Зарплата расчитывается, исходя из значения свойства "occupation" следующим образом:
//            • "director" — 3000;
//            • "manager" — 1500;
//            • "programmer" — 2000;
//            • для остальных значений — 1000.
//        После выполнения функции — вывести информацию о сотрудниках.
           

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
        }
    }
}

addSalary(company);

for (var i = 0; i < company.length; i++) {
    console.log("Имя сотрудника:  " + company[i].name);
    console.log("Фамилия сотрудника: " + company[i].sName);
    console.log("Возраст сотрудника: " + company[i].age);
    console.log("Должность сотрудника:" + company[i].occupation);
    console.log("Зарплата сотрудника: " + company[i].salary);
}


