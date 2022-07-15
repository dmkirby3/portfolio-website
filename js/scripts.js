
function menuToggle () {
  var x = document.getElementById('myNavtoggle');
if (x.className === 'navToggle') {
  x.className += ' responsive';
}
  else {
    x.className = 'navToggle';
  }
}
