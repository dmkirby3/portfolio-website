function menuToggle (x) {
  var x = document.getElementById('myNavtoggle');
  if (x.className === 'navToggle') {
    x.className += ' responsive';
  } else {
    x.className = 'navToggle';
  }
}

$('#click_advance').click(function() {
  $('#display_advance').toggle('1000');
  $("i", this).toggleClass("fas fa-bars fas fa-x");
});
