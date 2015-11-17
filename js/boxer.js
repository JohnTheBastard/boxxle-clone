/* * * * * * * * * * * * * * * *
 * BOXER GAME                  *
 * Created by  John Hearn      *
 *             Max Jacobson    *
 *             Doug Popadince  *
 * CF201       Fall 2015       *
 * * * * * * * * * * * * * * * */

// all level data: this will eventually be moved to a JSON file
var levelData = [ { floor: [ [ 01, 01 ], [ 02, 01 ], [ 03, 01 ], [ 01, 02 ],
			     [ 02, 02 ], [ 03, 02 ], [ 01, 03 ], [ 02, 03 ],
			     [ 03, 03 ], [ 07, 03 ], [ 03, 04 ], [ 07, 04 ],
			     [ 03, 05 ], [ 04, 05 ], [ 05, 05 ], [ 06, 05 ],
			     [ 07, 05 ], [ 02, 06 ], [ 03, 06 ], [ 04, 06 ],
			     [ 06, 06 ], [ 07, 06 ], [ 02, 07 ], [ 03, 07 ],
			     [ 04, 07 ] ],
		    start: [ 01, 01 ],
		    crate: [ [ 02, 02 ], [ 03, 02 ], [ 02, 03 ] ],
		    dots:  [ [ 07, 03 ], [ 07, 04 ], [ 07, 05 ] ]
		  } ]

var wallURL = "img/RedBrick.png";
var floorURL = "img/FloorTile.png";
var crateURL = "img/WoodenCrate.png";
var dotsURL  = "img/DotTile.png";

// We want our coordinates to be 4-digit strings, so
// we need to pad single digits with a leading zero.
var pad = function (num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}

function Coord(tileType, tileURL) {
    this.$div = $( '<div></div>' );
    this.$img = $( '<img></img>' );
    this.tile = tileType;
    this.$img.attr( 'src', tileURL );
    this.$div.append( this.$img );
}

function GameBoard() {
    this.coordinates = [ ];
    this.$element = $('<section></section>').attr( 'id', "container" );
    for ( var ii = 0; ii < 20; ii++ ) {
	for ( var jj = 0; jj < 20; jj++ ) {
	    this.coordinates.push( [ ] );
	    this.coordinates[jj].push( new Coord( "wall", wallURL ) );
	    this.$element.append( this.coordinates[jj][ii].$div );
	}
	
    }
}


var BOXER_GAME_MODULE = (function() {
    
    var my = {};
    my.$anchor = $( "#gameBoard" );
    my.game = new GameBoard();
    my.$anchor.append( my.game.$element );

    my.updateCell = function( [x, y], tileType, tileURL) {
	my.game.coordinates[x][y].tile = tileType;
	my.game.coordinates[x][y].$img.attr( 'src', tileURL );

    }
    
    my.loadLevel = function( levelObject ) {
	// update floor tiles
	for ( var ii = 0; ii < levelObject.floor.length; ii++ ) {
	    my.updateCell(levelObject.floor[ii], "floor", floorURL );
	}
	// update dot tiles
	for ( var ii = 0; ii < levelObject.dots.length; ii++ ) {
	    my.updateCell(levelObject.dots[ii], "dots", dotsURL );
	}
	
	// update crate tiles
	for ( var ii = 0; ii < levelObject.crate.length; ii++ ) {
	    my.updateCell(levelObject.crate[ii], "crate", crateURL );
	}
    }
    

    my.loadLevel( levelData[0] );

    return my;
})();
