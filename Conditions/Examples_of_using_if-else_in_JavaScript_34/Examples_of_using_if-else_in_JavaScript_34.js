// Задача 1
// Решите аналогичную задачу, только определите в какую треть часа попадает указанное количество минут.

let min = 10;

if (min >= 0 && min <= 20) {
	console.log('Первая треть часа') // выведет "первая треть часа"
}
if (min >= 21 && min <= 40) {
 	console.log('Вторая треть часа');
}
if (min >= 41 && min <= 60) {
 	console.log('Третья треть часа');
}



// Задача 2
// В переменной arr содержится некоторый массив с числами.
// Напишите условие, которое проверит, что в массиве 3 элемента. Если это так, выведите на экран сумму элементов массива.

let arr = [1, 2, 3]

if(arr.length == 3) {
  console.log(arr[0] + arr[1] + arr[2]) // выведет6
}else{
  console.log('не равна')
}



// Проверка на равенство первой цифры равна ли она 1 и последней цыфры числа равна ли она 5, если равна ссумировать результат, если не равны, то вывести "не равны"

let str = '12345'
let last = str[str.length - 1];

if (last == 5) {
  if(str[0] == 1) {
    console.log(+last + +str[0])
  } else {
    console.log('не равны')
  }
}



// Задача 3
// Дано целое число. Напишите условие, которое проверит, равна ли последняя цифра этого числа нулю.

let num = 110
let str = String(num)
let last = str[str.length - 1]

  if(last == 0) {
    console.log('верно') // выведет "верно"
}else{
    console.log('неверно')
  }



// Задача 4
// Пусть в переменной num хранится число. Определите, четное число или нет. Число будет четным, если последний символ равен 0, 2, 4, 6 или 8, и нечетным в противном случае.

let num = 118

if(num % 2 == 0) {
  console.log('чётное') // выведет чётное
}else{
	console.log('нечётное')
}



// Задача 5
// Как известно, четные числа делятся на 2 без остатка, а нечетные - с остатком.
// Пусть у вас дано число. С помощью оператора % и конструкции if проверьте четное это число или нет.

let num = 111

if(num % 2 != 0) {
	console.log('нечётное') // выведет 'нечётное'
}else{
	console.log('чётное')
}



// Задача 6
// Дано число. Проверьте, что оно делится на 3.

let num = 102

	if(num % 3 == 0) {
		console.log('делится на три') // выведет 'делится на три'
	}else{
		console.log('не делится на три')
	}