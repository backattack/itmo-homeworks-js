'use strict'
// Задача №3
// Дана картинка. Под ним инпут и кнопка. Реализовать механизм
// добавления комментария под картинку введённого в инпут по
// нажатию на кнопку.

window.onload   = function() {
    button.onclick = function() {
	  var input = document.getElementById('input');
      var messageFromInput = input.value;
      var chat = document.getElementById('li');
	  var newLi = document.createElement('li');
	  newLi.innerHTML = messageFromInput;
	  chat.appendChild(newLi);
      return false;
    };
};
