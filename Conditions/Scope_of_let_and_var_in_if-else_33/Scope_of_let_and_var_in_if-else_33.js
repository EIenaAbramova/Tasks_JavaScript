/* Задача 1
Автор приведенного ниже кода хотел выполнить проверку возраста на достижение 18 лет. Код, однако, не работает. Исправьте ошибку автора кода. Вот проблемный код: */

let age = 17;  

if (age >= 18) {
	let adult = true;
} else {
	let adult = false;
}
console.log(adult);


let age = 17; 
let adult; 

if (age >= 18) {
	adult = true;
} else {
	adult = false;
}
console.log(adult);



/* Задача 2
Автор приведенного ниже кода хотел выполнить проверку возраста на достижение 18 лет. Код, однако, при любом значение возраста выводит в консоль значение undefined. Исправьте ошибку автора кода. Вот проблемный код: */

let age = 17;
let adult;

if (age >= 18) {
	let adult = true;
} else {
	let adult = false;
}

console.log(adult);


let age = 17;
let adult;

if (age >= 18) {
	adult = true;
} else {
	adult = false;
}

console.log(adult);



/* Задача 3
Автор приведенного ниже кода хотел выполнить проверку возраста на достижение 18 лет. После проверки кода оказалось, что если возраст равен или больше 18 лет, то в переменную adult записывается true, как и должно быть, однако, если возраст меньше 18, то переменная adult имеет значение undefined. Исправьте ошибку автора кода.

Вот проблемный код: */

let age = 17;
let adult;

if (age >= 18) {
	adult = true;
} else {
	let adult = false;
}

console.log(adult);


let age = 17;
let adult;

if (age >= 18) {
	adult = true;
} else {
	adult = false;
}

console.log(adult);



/* Задача 4
Автор приведенного ниже кода хотел выполнить проверку возраста. Код, однако, при любом значение возраста выводит в консоль значение undefined. Исправьте ошибку автора кода.

Вот проблемный код: */

let age = 17;
let result;

if (age >= 18) {
	if (age <= 23) {
		let result = 'от 18 до 23';
	} else {
		let result = 'больше 23';
	}
} else {
	let result = 'меньше 18';
}

console.log(result);


let age = 17;
let result;

if (age >= 18) {
	if (age <= 23) {
		result = 'от 18 до 23';
	} else {
		result = 'больше 23';
	}
} else {
		result = 'меньше 18';
}

console.log(result);



/* Задача 5
Автор приведенного ниже кода хотел выполнить проверку возраста. Код, однако, при значение возраста большим 18 лет выводит в консоль значение undefined. Исправьте ошибку автора кода.

Вот проблемный код: */

let age = 19;
let result;

if (age >= 18) {
	let result;
	
	if (age <= 23) {
		result = 'от 18 до 23';
	} else {
		result = 'больше 23';
	}
} else {
	result = 'меньше 18';
}

console.log(result);


let age = 19;
let result;

if (age >= 18) {
		result;
	
if (age <= 23) {
		result = 'от 18 до 23';
} else {
		result = 'больше 23';
	}
} else {
	result = 'меньше 18';
}

console.log(result);



/* Область видимости var */



/* Задача 6
Определите, что выведет приведенный код: */

let num = 1;
		
if (num == 1) {
	var result = 'верно';
} else {
	var result = 'неверно';
}

console.log(result); // выведет "верно"



/* Задача 7
Определите, что выведет приведенный код: */

let num = 1;
		
	if (num == 1) {
	let result = 'верно';
} else {
	let result = 'неверно';
}

console.log(result); // выведет "result is not defined"

