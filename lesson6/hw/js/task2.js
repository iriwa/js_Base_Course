// 2 Допишите функцию countOnline.

        let users = [
            {
                age: 27,
                online: false
            },
            {
                age: 32,
                online: true
            },
            {
                age: 48,
                online: false
            },
            {
                age: 19,
                online: true
            }
        ];

        function countOnline(users) {
            var result = users.filter(user => user.online === true);
            return result;
        };
        console.log(countOnline(users));

        //     var filtered2 = users.filter(function countOnline(users) {
		// 	console.log(
		// 		'age: ' + users.age, 
		// 		'online: ' + users.online);
		// 	return users.online === true;
		// });

		// console.log(filtered2);

        // function countOnline(users) {
        //     users.filter
        //     console.log(
		// 		'age: ' + users.age, 
		// 		'online: ' + users.online);
		// 	return users.online === true;
		// }
        // console.log(countOnline(users));