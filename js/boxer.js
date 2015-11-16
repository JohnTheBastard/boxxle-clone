/* * * * * * * * * * * * * * * *
 * BOXER GAME                  *
 * Created by  John Hearn      *
 *             Max Jacobson    *
 *             Doug Popadince  *
 * CF201       Fall 2015       *
 * * * * * * * * * * * * * * * */

// all level data: this will eventually be moved to a JSON file
var levelData = [ { floor: [ "0101", "0201", "0301", "0102", "0202", "0302",
			     "0103", "0203", "0303", "0703", "0304", "0704",
			     "0305", "0405", "0505", "0605", "0705", "0206",
			     "0306", "0406", "0606", "0706", "0207", "0307",
			     "0407" ],
		    start: [ "0101" ],
		    crate: [ "0202", "0302", "0203" ],
		    dots:  [ "0703", "0704", "0705" ] } ]

var brickURL = "img/RedBrick.png";
var floorURL = "img/FloorTile.jpg";
var crateURL = "img/WoodenCrate.png";

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
	    var coordinate = pad(jj, 2) + pad(ii, 2);
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

    my.updateCell = function(coord, tileURL) {
	// Pretty sure this is a bad way to do this. Probably bad performance.
	var cell = document.querySelector("[data-coord='" + coord + "']");
	// This also seems not great.
	var child = cell.children[0];
	child.src = tileURL;
    }
    
    my.loadLevel = function( levelObject ) {
	// update floor tiles
	for ( var ii = 0; ii < levelObject.floor.length; ii++ ) {
	    my.updateCell(levelObject.floor[ii], floorURL );
	}
	// update dot tiles
	for ( var ii = 0; ii < levelObject.dots.length; ii++ ) {
	    my.updateCell(levelObject.dots[ii], dotsURL );
	}
	
	// update crate tiles
	for ( var ii = 0; ii < levelObject.crate.length; ii++ ) {
	    my.updateCell(levelObject.crate[ii], crateURL );
	}
    }
    

    my.loadLevel( levelData[0] );
    

    return my;
})();
