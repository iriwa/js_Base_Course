// 1. Напишите функцию, которая принимает массив в качестве аргумента. 
//         Используя slice(), извлеките информацию из массива аргументов и верните новый массив, содержащий элементы «warm» и «sunny».

var weather = ['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms'];

 function returnSomeArray() {
    var subArray = weather.slice(2, 4);
    console.log(subArray);
 }

returnSomeArray();

