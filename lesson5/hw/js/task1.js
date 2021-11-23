// 1. Создать объект Point, содержащий два свойства: "x" и "y" — координаты точки, и метод GetQuadrant, вычисляющий, в каком квадранте в декартовой системе координат находится данная точка. Протестируйте данный объект, изменяя значения его координат, и повторно вызывая метод GetQuadrant.
var horizontal = +prompt("Введите значение x");
var vertical = +prompt("Введите значение y");

var point = {
    x: horizontal,
    y: vertical
}

var getQuadrant = function (x, y) {
    if (point.x > 0 && point.y > 0) {
        console.log("Данная точка находится в I квадранте в декартовой системы координат");
    }
    else if (point.x < 0 && point.y > 0 ) {
        console.log("Данная точка находится в II квадранте в декартовой системы координат");
    }
    else if (point.x < 0 && point.y < 0) {
        console.log("Данная точка находится в III квадранте в декартовой системы координат");
    } 
    else if (point.x > 0 && point.y < 0) {
        console.log("Данная точка находится в IV квадранте в декартовой системы координат");
    }
    else if (point.x == 0 && point.y == 0) {
        console.log("Начало координат");
    }
}

getQuadrant();


