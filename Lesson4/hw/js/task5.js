// 5.  Создать игру "Камень-Ножницы-Бумага".
//         Выбор компьютера определяется строкой:  
		
// 		var computerChoice = Math.random();
// 		alert(computerChoice);
		
// 		let comp = getComputerChoice();
// 		let user = getUserChoice();
// 		function game(comp, user) {
			
// 		}

//         Math.random() выдает произвольное число в промежутке от 0 до 1, на основании этого можно построить принцип выбора решения компьютера.
// 		Запросить у пользователя один из трех вариантов "Камень-Ножницы-Бумага"
// 		Сравнить ответ пользователя и компьютера, определить кто выиграл (или ничья)
// 		Спросить пользователя, хочет ли он повторить, если "да", запустить игру заново


    
function getRandomInt() {
    return Math.floor(Math.random() * 3);
 }

    function getUserChoice() {
      return +prompt("Введите число от 1 до 3, где 1 - это Камень, 2 - Ножницы, 3 - Бумага");
    }
    function getComputerChoice() {
        return getRandomInt();
    }

		let comp = getComputerChoice();
		let user = getUserChoice();
		    
    function game(comp, user) {       
        if (comp === user) {
            alert("Ничья");
        } else if (comp === 1) { 
            if (user === 3) {
              return document.write("Вы победили");
        } else if (user === 2) {
            return document.write("Компьютер выиграл");
        } else if (user === 1) {
             return document.write("Ничья");
        }  else {
          return document.write("Введите правильное значение");
        }
    } else if(comp === 2) {
        if (user === 3) {
          return document.write("Компьютер выиграл");
        } else if(user === 2) {
          return document.write("Ничья");
        } else if (user === 1) {
          return document.write("Вы победили");
     }  else {
       return document.write("Введите правильное значение");
    } 
  }  else if(comp === 3) {
      if (user === 3) {
        return document.write("Ничья");
      } else if(user === 2) {
        return document.write("Вы победили");
      } else if (user === 1) {
        return document.write("Компьютер выиграл");
   }  else {
     return document.write("Введите правильное значение");
  }
}
    }
    game(comp, user);
