/* Задача 1
Дана кнопка. По двойному клику по ней выведите на экран какое-нибудь сообщение. */

let button = document.querySelector('#button');

button.addEventListener('dblclick', function() {
	alert('двойной клик')
});



/* Задача 2
Дана кнопка. По наведению на нее выведите на экран какое-нибудь сообщение.
 */

let button1 = document.querySelector('#button1');

button1.addEventListener('mouseover', function() {
	alert('наведение мышью')
});



/* Задача 3
Дана кнопка. По уходу курсора с нее выведите на экран какое-нибудь сообщение. */

let button2 = document.querySelector('#button2');

button2.addEventListener('mouseout', function() {
	alert('уход курсора с элемента')
});



/* !Ловим несколько событий на элементе */

let button3 = document.querySelector('#button3');

button3.addEventListener('dblclick', function() { /* не срабатывает двойной клик из-за двух событий указанных ниже это  mouseover и mouseout */
	alert('двойной клик')
});

button3.addEventListener('mouseover', function() {
	alert('наведение мышью')
});

button3.addEventListener('mouseout', function() {
	alert('уход курсора с элемента')
});