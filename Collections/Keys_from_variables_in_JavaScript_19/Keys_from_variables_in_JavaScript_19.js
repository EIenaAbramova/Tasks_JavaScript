// Задача 1
// Дан следующий массив:Дана также переменная key со значением 2. Выведите на экран элемент, ключ которого хранится в переменной key.

let arr = ['a', 'b', 'c'];
let key = 2;

alert(arr[key]); // выведет 'с'



// Задача 2
// Дан следующий массив: Дана также переменная key1 со значением 1 и переменная key2 со значением 2. Найдите сумму элементов, ключи которых хранятся в наших переменных.

let arr = [1, 2, 3, 4, 5];
let key1 = 1;
let key2 = 2;

alert(arr[key1] + arr[key2]); // выведет 5



// Задача 3
// Дан следующий объект: Дана переменная key, в которой хранится один из ключей нашего объекта. Выведите с помощью переменной key соответствующий элемент объекта.

let obj = {
	'a': 1,
	'b': 2,
	'c': 3
};
let key = 'b';

alert(obj[key]); // выведет 2