// set cookie.js
checkLocalStorage = function() {

  console.log("here")

  if (( JSON.parse(localStorage.getItem("Name") ))) {
    $('#hiddenlist').removeClass('hide');
    $('#gameboyIMG').removeClass('hide');
    $('#descriptionList').removeClass('hide');
    $('.initialParagraphs').remove();
    var welcomeBack = '<p class="welcome"> Welcome back ' + localStorage.Name + '. To continue ' +
      'on your current level click the gameboy or the " Play " tab above.' +
     ' If this is not you or you would like to start over at level one, simply'  +
     'update the information by filling out fieldset below and click save.'
    $('.welcome').replaceWith(welcomeBack);

  }
}

checkLocalStorage();


var COOKIE_MODULE = (function() {
    var my = {};
    my.username;
    my.difficulty;
    my.welcomeBack;
    my.getInput = function() {
  console.log("clicked");
	my.username = $('#username').val();
  my.difficulty = $('input[name=difficulty]:checked').val();
  if( my.username.length > 0 && my.difficulty.length > 0) {
    $('#hiddenlist').removeClass('hide');
    $('#gameboyIMG').removeClass('hide');
    $('#descriptionList').removeClass('hide');
	localStorage.setItem( "Name", JSON.stringify( my.username ) );
	localStorage.setItem( "Initialized", JSON.stringify( 'false' ) );
  localStorage.setItem("Level", JSON.stringify( '0' ) );
  localStorage.setItem("Difficulty", JSON.stringify( my.difficulty ) );
  }
    }

    return my;
})();
