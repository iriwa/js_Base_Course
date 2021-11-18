// 11. Подмассив наибольшей суммы
// 		Определите максимальную сумму в подмассиве
		
// 		// Setup
// 		var a = [
// 			[1, -10, 4, 5],
// 			[1, 5, 5, 3],
// 			[-1, 8, 4, 1],
// 			[1, -10, -4, 5],
// 			[1, 10, 4, 0],
// 		];

// 		Например:
// 		var a = [
// 			[1, 3, 6], 
// 			[3, 1, -1], 
// 			[3, 0]
// 		];
		
// 		Максимальная сумма тут первого подмассива: 1 + 3 + 6 = 10;
// 		Ответ: 10

// var a = [
//     [1, -10, 4, 5],
//     [1, 5, 5, 3],
//     [-1, 8, 4, 1],
//     [1, -10, -4, 5],
//     [1, 10, 4, 0],
// ];

// for (var i = 0; i < a.length; i++) {
//     var sum = 0;
//     var max = 0;
//     for (var j = 0; j < a[i].length; j++) {
//         sum += a[i][j];
//     }
//     if (sum > max) {
//         max = sum;
//     }
// }
// console.log(max);

// numbers.sort(function (a, b) { return a - b; });

var a = [
        [1, -10, 4, 5],
        [1, 5, 5, 3],
        [-1, 8, 4, 1],
        [1, -10, -4, 5],
        [1, 10, 4, 0],
    ];
  
    var maxArray = new Array();

    for (var i = 0; i < a.length; i++) {
        var sum = 0;
        
        for (var j = 0; j < a[i].length; j++) {
            sum += a[i][j];
        }
        
        maxArray.push(sum);
    }

    var sortedMaxArrey = maxArray.sort(function (a, b) { return a - b; });
    
    // sortedMaxArrey.reverse();

    console.log(sortedMaxArrey[sortedMaxArrey.length -1]);

    