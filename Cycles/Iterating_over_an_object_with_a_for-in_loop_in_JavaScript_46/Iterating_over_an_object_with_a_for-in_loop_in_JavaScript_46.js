/* Задача 1
Дан объект следующий объект: С помощью цикла for-in найдите сумму элементов этого объекта. */

let obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };

let result = 0

for (let i in obj) {
	result += obj[i]
}
console.log(result) // выведет 15
