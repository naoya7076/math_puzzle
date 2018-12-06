'use strict';
// 1文字ずつ配列にバラして、反転させ、文字列として結合
const Check = (num, radix) => {
	if (num.toString(radix) == num.toString(radix).split("").reverse().join("")) {
		return true;
	};
};
let num = 11;
while (true) {
	if (Check(num, 10) && Check(num, 2) && Check(num, 8)) {
		console.log(num);
		break;
	} else {
		num += 2
	};
};