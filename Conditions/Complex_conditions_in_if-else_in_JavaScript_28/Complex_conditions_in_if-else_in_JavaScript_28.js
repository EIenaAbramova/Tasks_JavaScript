// Задача 1
// Если переменная num больше нуля и меньше 5, то выведите на экран слово 'верно', иначе выведите слово 'неверно'.

let num = 3;
if (num > 0 && num < 5) {
	console.log('верно'); // выведет верно
} else {
	console.log('не верно');
}



// Задача 2
// Если переменная num больше или равна 10 и меньше или равна 20, то выведите на экран слово 'верно', иначе выведите слово 'неверно'.

let num = 11;
if (num >= 10 && num <= 20) {
	console.log('верно'); //выведет верно
} else {
	console.log('не верно');
}



// Задача 3
// Если переменная num1 равна или меньше 1, а переменная num2 больше или равна 3, то выведите на экран слово 'верно', иначе выведите слово 'неверно'.

let num1 = 2;
let num2 = 3;
if (num1 <= 1 && num2 >= 3) {
	console.log('верно');
} else {
	console.log('не верно'); // выведет неверно
}



// Задача 4
// Не запуская код определите, что выведется на экран:

let num1 = -10;
let num2 = -10;

if (num1 >= 0 || num2 >= 0) {
	console.log('верно');
} else {
	console.log('неверно'); // неверно
}



// Задача 5
// Не запуская код определите, что выведется на экран:

let num1 = 0;
let num2 = 0;

if (num1 >= 0 || num2 >= 0) {
	console.log('верно'); // верно
} else {
	console.log('неверно');
}



// Задача 6
// Не запуская код определите, что выведется на экран:

let num1 = 0;
let num2 = 5;

if (num1 >= 0 || num2 >= 0) {
	alert('верно'); // верно
} else {
	alert('неверно');
}



// Задача 7
// Не запуская код определите, что выведется на экран:

let num1 = 5;
let num2 = 5;

if (num1 >= 0 || num2 >= 0) {
	alert('верно'); // верно
} else {
	alert('неверно');
}



// Задача 8
// Не запуская код определите, что выведется на экран:

let num1 = -5;
let num2 = 15;

if (num1 >= 0 || num2 >= 0) {
	alert('верно'); // верно
} else {
	alert('неверно');
}



// Задача 9
// Не запуская код определите, что выведется на экран:

let num = 1;

if (num == 0 || num == 1) {
	alert('верно'); // верно
} else {
	alert('неверно');
}



// Задача 10
// Не запуская код определите, что выведется на экран:

let num = 2;

if (num == 0 || num == 1) {
	alert('верно');
} else {
	alert('неверно'); // неверно
}



// Задача 11
// Не запуская код определите, что выведется на экран:

let num = 2;

if (num == 0 || num == 1 || num == 2) {
	alert('верно'); // верно
} else {
	alert('неверно');
}



// Задача 12
// В приведенном ниже коде укажите приоритет операций в явном виде:

let num = 3;

if ((num > 5 && num < 10) || num == 20) {
	alert('верно');
} else {
	alert('неверно'); // неверно
}



// Задача 13
// В приведенном ниже коде укажите приоритет операций в явном виде:

let num = 3;

if (num > 5 || (num > 0 && num < 3)) {
	alert('верно');
} else {
	alert('неверно'); // неверно
}



// Задача 14
// В приведенном ниже коде укажите приоритет операций в явном виде:

let num = 3;

if (num == 9 || (num > 10 && num < 20) || (num > 20 && num < 30)) {
	alert('верно');
} else {
	alert('неверно'); // неверно
}
