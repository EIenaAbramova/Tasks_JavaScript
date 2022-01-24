/* Задача 1
Дан массив с элементами 'a', 'b', 'c', 'd', 'e'. С помощью цикла for выведите все эти элементы на экран. */

let arr = ['a', 'b', 'c', 'd', 'e']

for (let i = 0; i < arr.length; i++){
	console.log(arr[i]) // выведет: a b c d e
}



/* Задача 2
В следующем коде программист вывел в консоль все элементы массива. В коде, однако, была допущена ошибка, которая привела к тому, что в последней итерации цикла почему-то выводится undefined, а не элемент массива. Исправьте ошибку программиста. Объясните, в чем он был не прав. */

let arr1 = [1, 2, 3, 4, 5];
		
for (let k = 0; k <= arr1.length; k++) {
	console.log(arr1[k]); // при укзывание знака = после знака > или <, после свойства length необходимо указывать -1
}

let arr2 = [1, 2, 3, 4, 5];
		
for (let j = 0; j < arr2.length; j++) {
	console.log(arr2[j]); // выведет: 1 2 3 4 5
}



/* Перебор массива и if */

/* Задача 3
Дан массив с элементами 1, 2, 3, 4, 5. С помощью цикла for и оператора if выведите в консоль нечетные элементы массива. */

let arr3 = [1, 2, 3, 4, 5]

for (let y = 0; y < arr3.length; y++){

	if (arr3[y] % 2 != 0) {
		console.log(arr3[y]) // выведет: 1 3 5
	}
}



/* Нахождение суммы элементов */

/* Задача 4
Дан массив с элементами 1, 2, 3, 4, 5. С помощью цикла for найдите произведение элементов этого массива. */

let result = 1
let arr4 = [1, 2, 3, 4, 5]

for (let q = 0; q < arr4.length; q++){
	result *= arr4[q]
}
console.log(result) //выведет: 120



/* Задача 5
Дан массив с элементами 1, 2, 3, 4, 5. С помощью цикла for найдите сумму квадратов элементов этого массива. */

let result1 = 0
let arr5 = [1, 2, 3, 4, 5]

for (let w = 0; w < arr5.length; w++){
	result1 += arr5[w] ** 2
}
console.log(result1) // выведет 55



/* Задачи */


/* Задача 6
Дан массив с элементами 2, 5, 9, 15, 1, 4. С помощью цикла for и оператора if выведите в консоль те элементы массива, которые больше 3-х, но меньше 10. */

let arr6 = [2, 5, 9, 15, 1, 4]

for (let e = 0; e < arr6.length; e++){

	if (arr6[e] > 3 && arr6[e] < 10) {
		console.log(arr6[e]) // выведет 5 9 4
	}
}



/* Задача 7
Дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива. */

let result2 = 0
let arr7 = [-2, 5, -9, 15, -1, 4]

for (let r = 0; r < arr7.length; r++){

	if (arr7[r] > 0) {
		result2 += arr7[r]
	}
}
console.log(result2) // выведет 24



/* Задача 8
Дан массив arr. Найдите среднее арифметическое его элементов (сумма делить на количество). Проверьте задачу на массиве с элементами 1, 2, 3, 4, 5. */

let result3 = 0
let num = 0
let arr8 = [1, 2, 3, 4, 5]

for (let t = 0; t < arr8.length; t++){

	result3 += arr8[t]
	num = result3 / arr8.length
}
console.log(num) // выведет: 3



/* Задача 9
Дан массив числами. Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5. */

let arr9 = [10, 20, 30, 50, 235, 3000];

for (let u = 0; u < arr9.length; u++){

	if (String(arr9[u])[0] == 1 || String(arr9[u])[0] == 2 || String(arr9[u])[0] == 5) {
		console.log(arr9[u]) //выведет 10 20 50 235
	}
}



/* Задача 10
Дан массив с числами. Выведите элементы этого массива в обратном порядке. */

let arr10 = [10, 20, 30, 50, 235, 3000];


for (let p = arr10.length - 1; p >= 0; p--){
	console.log(arr10[p]) // выведет: 3000 235 50 30 20 10
}



/* Задача 11
Дан массив с числами. С помощью цикла выведите на экран все элементы, значение которых совпадает с их порядковым номером в массиве. */

let arr11 = [1, 3, 2, 0, 4, 7, 6]

for (let s = 0; s < arr11.length; s++){

	if (arr11[s] == s) {
		console.log(arr11[s]) //выведет 2 4 6
	}
}



/* Задача 12
Дан массив с числами. С помощью цикла for и функции document.write выведите каждый элемент массива с новой строки. Используйте для этого тег br. */

let arr12 = [1, 3, 2, 0, 4, 7, 6]

for (let d = 0; d < arr12.length; d++){
	document.write(arr12[d] + '<br>')
}



/* Задача 13
Дан массив с числами. С помощью цикла for и функции document.write выведите каждый элемент массива в отдельном абзаце. */

let arr13 = [1, 3, 2, 0, 4, 7, 6]

for (let f = 0; f < arr13.length; f++){
	document.write('<p>' + arr13[f] + '</p>')
}



/* Задача 14
Составьте массив дней недели. С помощью цикла for выведите все дни недели, а выходные дни выведите жирным. */

let arr14 = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье']

for (let g = 0; g < arr14.length; g++){

	if (g == 5 || g == 6) {
		document.write('<p>' + '<b>' + arr14[g] + '</b>' + '</p>')
	} else {
		document.write('<p>' + arr14[g] + '</p>')
	}
}



/* Задача 15
Составьте массив дней недели. С помощью цикла for выведите все дни недели, а текущий день выведите курсивом. Номер текущего дня должен храниться в переменной day. */


let arr15 = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье']
let day = 0

for (let h = 0; h < arr15.length; h++){
	
	if (h == day) {
		document.write('<p>' + '<i>' + arr15[h] + '</i>' + '</p>')
		
	} else {
		document.write('<p>' + arr15[h] + '</p>')
	}
}








