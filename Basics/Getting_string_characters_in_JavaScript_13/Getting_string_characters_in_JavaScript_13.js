//  !символов строки

// Задача 1
// Дана строка 'abcde'.Обращаясь к отдельным символам этой строки выведите на экран символ 'a', символ 'c', символ 'e'.

let str = 'abcde';

alert(str[0]); // a
alert(str[2]); // c
alert(str[4]); // e



// Задача 2
// Дана переменная со строкой 'abcde'.Обращаясь к отдельным символам этой строки запишите в новую переменную символы этой строки в обратном порядке, то есть 'edcba'.

let str = 'abcde';
let rts = str[4] + str[3] + str[2] + str[1] + str[0];

alert(rts); // edcba



// Задача 3
// Дана переменная str со строкой 'abcde' и переменная num с номером символа.Выведите на экран символ, номер которого хранится в переменной num.

let str = 'abcde';
let num = 3;

alert(str[num]); // d



// !Последний символ строки

// Задача 4
// Дана строка.Выведите на экран ее последний символ.

let str = 'abcde';

alert(str[str.length - 1]); // e



// Задача 5
// Дана строка.Выведите на экран ее предпоследний символ.

let str = 'abcde';

alert(str[str.length - 2]); //d



// Задача 6
// Дана строка.Выведите на экран ее предпредпоследний символ.

let str = 'absde';

alert(str[str.length - 3]); // s



// !Строки с цифрами

// Задача 7
// Дана строка '12345'.Найдите сумму цифр этой строки.

let num = '12345';

alert(Number(num[0]) + Number(num[1]) + Number(num[2]) + Number(num[3]) + Number(num[4])); // 15



// !Обращение к цифрам числа

// Задача 8
// Дано число 12345. Найдите сумму цифр этого числа.

let num = 12345;
let str = String(12345);

alert(Number(str[0]) + Number(str[1]) + Number(str[2]) + Number(str[3]) + Number(str[4])); // 15



// Задача 9
// Дано число 12345. Найдите произведение цифр этого числа.

let num = 12345;
let str = String(12345);

alert(str[0] * str[1] * str[2] * str[3] * str[4]); // 120



// Задача 10
// Дано число 12345. Переставьте цифры этого числа в обратном порядке.

let num = 12345;
let str = String(12345);
let rts = str[4] + str[3] + str[2] + str[1] + str[0];

alert(rts); // 54321



