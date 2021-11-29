// 1.	Часы
// Напишите функцию, которая принимает на вход количeство часов, минут и секунд, и преобразует полученное время в миллисекунды.

// Пример:
// past(0, 1, 1) == 61000

var hours = +prompt("");
var minut = +prompt("");
var sec = +prompt("");

function time (hours = 0, minut = 0, sec = 0) {
    console.log(hours, minut, sec);
    // if (!hours) {
    //     hours = 1
    // }
    // if (!minut) {
    //     minut = 1
    // }
    // if (!sec) {
    //     sec = 1
    // }

    return (hours * 60 * 60 * 1000) + (minut * 60 * 1000) + (sec * 1000);
}
var result = time(hours, minut, sec);

console.log(result);