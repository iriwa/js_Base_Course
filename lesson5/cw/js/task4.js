// 4.  Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
var obj = {};
var obj2 = {
    name: 1, 
    color: "red"
};
function isEmpty(obj) {
  var arrProp =  Object.getOwnPropertyNames(obj);  
  console.log(arrProp);
  if (arrProp.length === 0) {
    return true;
  } 
  return false;
}