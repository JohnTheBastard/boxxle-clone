$('#gameboyIMG').on('click', function(e) {

  var gameboy = $(this);
  $('#spriteMain').addClass('move');

  setTimeout(function() {
    gameboy.addClass('move');
  }, 2000);

  setTimeout(function() {
    window.location.replace('play.html');
  }, 6000);

});
