// 2. Создать объект Calculator, который должен содержать методы для расчета суммы, разности, произведения и частного двух чисел.
//        Протестировать данный объект, принимая от пользователя значения двух операндов и знак операции.
//        В зависимости от принятого знака операции, вызвать соответствующий метод.

var сalculator = {
    add: function (a, b) {
    var result = a + b;
    console.log(result);
},
    sub: function (a, b) {
    var result = a - b;
    console.log(result);
},
    mul: function (a, b) {
    var result = a * b;
    console.log(result);
},
    div: function (a, b) {
    var result = a / b;
    console.log(result);
    },
}

var operand1 = +prompt("Введите первое число: ");
var sign = prompt("Введите знак арифметической операции: + - * /");
var operand2 = +prompt("Введите второе число: ");
var result;

// if (sign == "+") {
//     сalculator.add(operand1, operand2);
// } else if (sign == "-") {
//     сalculator.sub(operand1, operand2);
// } else if (sign == "*") {
//     сalculator.mul(operand1, operand2);
// } else if (sign == "/") {
//     сalculator.div(operand1, operand2);
// } else {
//     console.log("Error");
// }

switch (sign) {
    case "+":
        сalculator.add(operand1, operand2);
        break;
    case "-":
        сalculator.sub(operand1, operand2);
        break;
    case "*":
        сalculator.mul(operand1, operand2);
        break;
    case "/":
        сalculator.div(operand1, operand2);
        break;
    default:
        document.write("<p><b style='color:red'>" + sign + "</b> - не является знаком арифметической операции.</p>");
}


