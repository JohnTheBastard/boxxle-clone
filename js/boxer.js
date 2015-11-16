/* * * * * * * * * * * * * * * *
 * BOXER GAME                  *
 * Created by  John Hearn      *
 *             Max Jacobson    *
 *             Doug Popadince  *
 * CF201       Fall 2015       *
 * * * * * * * * * * * * * * * */

// We want our coordinates to be 4-digit strings, so
// we need to pad single digits with a leading zero.
var pad = function (num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}

function GameBoard(){
    this.element = document.createElement( "section" );
    this.element.setAttribute( "id", "container" );
    for ( var ii = 0; ii < 20; ii++ ) {
	for ( var jj = 0; jj < 20; jj++ ) {
	    var coordinate = pad(ii, 2) + pad(jj, 2);
	    console.log(coordinate);
	    var cell = document.createElement( "div" );
	    cell.setAttribute( "data-coord", coordinate );
	    var tile = document.createElement("img");
	    tile.src = "img/RedBrick.png";
	    cell.appendChild( tile );
	    this.element.appendChild( cell );
	}
    }
}


var BOXER_GAME_MODULE = (function() {
    
    var my = {};
    my.anchorNode = document.getElementById( "gameBoard" );
    my.game = new GameBoard();
    my.anchorNode.appendChild( my.game.element );

    //var $crate = $('div').find(el+[data-coord=+current+]);
    return my;
})();
