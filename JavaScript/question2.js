'use strict';
const operator = ["*", ""];
for (let i = 1000; i < 1007; i++) {
	let num = String(i);
	console.log(num.charAt(3));
	// for (j = 0; j < operator.length; j++) {
	// 	for (k = 0; k < operator.length; k++) {
	// 		for (l = 0; l < operator.length; l++) {
	// 			let result = num.charAt(3) + operator[j] + num.charAt(2)
	// 				+ operator[k] + num.charAt(1) + operator[l] + num.charAt(0);
	// 		};
	// 	};
	// };
};







// for (i = 1000; i < 10000; i++) {
// 	let Num_str = i.toString(),
// 		FirstTwoDigits = Num_str.substring(0, 1),	//substring「部分文字列」
// 		LastTwoDigits = Num_str.substring(1, 4),
// 		MulTwoNums = eval(`${FirstTwoDigits} * ${LastTwoDigits}`),
// 		ReversedMulTwoNums = MulTwoNums.toString().split("").reverse().join("");
// 	if (i == Number(ReversedMulTwoNums)) {
// 		console.log(i);
// 	};
// };