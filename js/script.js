var buttons = document.getElementsByClassName('button');
var text=' ';
for (var i = 0; i < buttons.length; i++) {
  text += buttons[i].innerText + ' ';
}
alert('Text in buttons : ' + text);
