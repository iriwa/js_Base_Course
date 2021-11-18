// 1. Сделать собственные примеры методов применяемых для массивов.

                    // JOIN
var products = ["milk", "bread", "meat", "potato", "vegetables"];

    console.log ("Before join");
    console.log (products);

var changeArray = products.join(" ");

    console.log ("After join");
    console.log (changeArray);

                     // SPLIT
var newProducts = changeArray.split(" ");

    console.log("After split");
    console.log(newProducts);

                    // CONCAT
var input;
var products = ["milk", "bread", "meat", "potato", "vegetables"];

while (input !== null) {
    input = prompt("Введите название нового продукта. \n\n Уже есть: \n\n " + products.join("\n"));
    products = products.concat(input);
}

console.log(products);
document.write(products.join("<br />"));

                    // REVERSE
var products = ["milk", "bread", "meat", "potato", "vegetables"];
 
console.log("First item before reverse " + products[0]);

products = products.reverse();

console.log("First item after reverse " + products[0]);

                    // SLICE

var products = ["milk", "bread", "meat", "potato", "vegetables"];
    console.log(products);

var begin = 1;
var finish = 4;

   var changeArray = products.slice(begin, finish);
    console.log(changeArray);

                    // SPLICE

var products = ["milk", "bread", "meat", "potato", "vegetables"];
    console.log("First list: " + products);

var del = products.splice(0, 2);
    console.log("Delete: " + del);
    console.log("Left: " + products);

products.splice(2, 0, "ice-cream", "water");
    console.log("New list: " + products);

                    // SORT
var products = ["milk", "bread", "meat", "potato", "vegetables"];
    console.log(products);

var changeArray = products.sort();
    console.log(changeArray);

                // PUSH
var products = ["milk", "bread", "meat", "potato", "vegetables"];
    console.log("First list: " + products);
    console.log("Size list: " + products.length);

var newLenght = products.push("water");
    console.log("List: " + products);
    console.log("Size list: " + newLenght);

                // POP
var products = ["milk", "bread", "meat", "potato", "vegetables"];
    console.log("First list: " + products);
    console.log("Size list: " + products.length);

var delProducts = products.pop();
    console.log("List after del: " + products);
    console.log("Size list: " + products.length);
    console.log("Deleted products: " + delProducts);

                // UNSHIFT
var products = ["milk", "bread", "meat", "potato", "vegetables"];
    console.log("First list: " + products);
    console.log("Size list: " + products.length);

var newLenght = products.unshift("water");
    console.log("First list with water: " + products);
    console.log("New size list: " + newLenght + " \nfirst product - " + products[0]);

                // SHIFT
var products = ["milk", "bread", "meat", "potato", "vegetables"];
    console.log("First list: " + products + " First product - " + products[0]);

var del = products.shift();
    console.log("New list: " + products + " First product after del - " + products[0]);
    console.log("Deleted products: " + del);
