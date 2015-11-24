// set cookie.js

var COOKIE_MODULE = (function() {
    var my = {};
    my.username;
    my.difficulty;
    my.getInput = function() {
  console.log("clicked");
	my.username = $('#username').val();
  my.difficulty = $('input[name=difficulty]:checked').val();
	localStorage.setItem( "Name", JSON.stringify( my.username ) );
	localStorage.setItem( "Initialized", JSON.stringify( 'false' ) );
  localStorage.setItem("Level", JSON.stringify( '0' ) );
  localStorage.setItem("Difficulty", JSON.stringify( my.difficulty ) );
    }

    return my;
})();
