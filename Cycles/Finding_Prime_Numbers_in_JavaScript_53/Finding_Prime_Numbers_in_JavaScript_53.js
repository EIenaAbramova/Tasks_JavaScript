/* Задача 1
Напишем код, который будет проверять число на то, простое оно или нет. */

let num = 31

let flag = true
for (let i = 2; i < num; i++) {
	if (num % i == 0) {
		flag = false
		break; // выйдем из цикла
	}
}

console.log(flag) //выведет true
