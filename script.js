"use strict";
let bg = document.getElementById("bg");
let moon = document.getElementById('moon');
let montains = document.getElementById('montains');
let road = document.getElementById('road');
let text = document.getElementById('text');
console.log('strada');


window.addEventListener('scroll', function(){
	var value = window.scrollY;

	bg.style.top = value * 0.5 + 'px';
	moon.style.left = -value * 0.5 + 'px';
	montains.style.top = -value * 0.15 + 'px';
	road.style.top = value * 0.15 + 'px';
	text.style.top = value * 1 + 'px';

});