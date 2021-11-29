// 4.	Напишите функцию, которая будет обрабатывать url, удаляя в нем всё после знака #

// 			Примеры:

// 			// returns 'www.codewars.com'
// 			removeUrlAnchor('www.codewars.com#about')

// 			// returns 'www.codewars.com?page=1' 
// 			removeUrlAnchor('www.codewars.com?page=1')
			
function removeUrlAnchor(str) {
    var index = str.indexOf("#");
    if(!index) {
        return str;
    }
    var array = str.split("");
        array.splice(index);
        console.log(array.join(""));
}

removeUrlAnchor('www.codewars.com#about');
removeUrlAnchor('www.codewars.com?page=1');			