/* Задача 1
Даны 5 абзацев. Дана функция. Привяжите эту функцию ко всем 5-ти абзацам. */

function func() {
	alert('message');
}

let elem1 = document.querySelector('#elem1')
let elem2 = document.querySelector('#elem2')
let elem3 = document.querySelector('#elem3')
let elem4 = document.querySelector('#elem4')
let elem5 = document.querySelector('#elem5')

elem1.addEventListener('click', func)
elem2.addEventListener('click', func)
elem3.addEventListener('click', func)
elem4.addEventListener('click', func)
elem5.addEventListener('click', func)