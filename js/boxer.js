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

var mobile = false;
if ( mobile ) {
    var cellWidth = 16;
} else {
    var cellWidth = 32;
}

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

function Crate( xy ) {
    this.x = xy[0] * cellWidth;
    this.y = xy[1] * cellWidth;
    this.onDot = false;
    
}

function GameBoard() {
    this.coordinates = [ ];
    this.$elementJQ = $('<section></section>').attr( 'id', "container" );
    for ( var ii = 0; ii < 20; ii++ ) {
	for ( var jj = 0; jj < 20; jj++ ) {
	    this.coordinates.push( [ ] );
	    this.coordinates[jj].push( new Coord( "wall", wallURL ) );
	    this.$elementJQ.append( this.coordinates[jj][ii].$div );
	}
    }
    this.$canvasJQ = $('<canvas></canvas>');
    this.canvas = this.$canvasJQ[0];
    this.context = this.canvas.getContext("2d");
    this.canvas.width = 640;
    this.canvas.height = 640;
    this.canvas.style.position = "absolute";
    this.canvas.style.left = 0;
    this.canvas.style.top = 0;
    this.canvas.style.zIndex = "10";
    this.element = this.$elementJQ[0];
    this.element.style.position = "absolute";
    this.element.style.left = 0;
    this.element.style.top = 0;
    this.element.style.zIndex = "0";

    this.crates = [ ];


    /* * * * * * * * * * * * * * * *
     * * * * Member Methods  * * * *
     * * * * * * * * * * * * * * * */

    // Chrome needs me to access parameter arrays this way.
    this.updateCell = function( xy, tileType, tileURL) {
	this.coordinates[ xy[0] ][ xy[1] ].tile = tileType;
	this.coordinates[ xy[0] ][ xy[1] ].$img.attr( 'src', tileURL );
	
    }

    this.loadLevel = function( levelObject ) {
	// update floor tiles
	for ( var ii = 0; ii < levelObject.floor.length; ii++ ) {
	    this.updateCell(levelObject.floor[ii], "floor", floorURL );
	}
	// update dot tiles
	for ( var ii = 0; ii < levelObject.dots.length; ii++ ) {
	    this.updateCell(levelObject.dots[ii], "dots", dotsURL );
	}
	
	// update crate tiles

	for ( var ii = 0; ii < levelObject.crate.length; ii++ ) {
	    this.crates.push( new Crate( levelObject.crate[ii] ) );
	    var $crateImg = $('<img></img>').attr('src', crateURL );
	    this.context.drawImage( $crateImg[0], this.crates[ii].x, this.crates[ii].y );
	    //this.updateCell(levelObject.crate[ii], "crate", crateURL );
	}
    }
}

var BOXER_GAME_MODULE = (function() {
    var my = {};
    my.$anchor = $( "#gameBoard" );
    my.game = new GameBoard();
    my.$anchor.append( my.game.$elementJQ );
    my.$anchor.append( my.game.$canvasJQ );

    //my.game.context.fillStyle = 'rgb(255,0,0)';
    //my.game.context.fillRect(1*cellWidth,2*cellWidth,cellWidth,cellWidth);

   /* window.onload = function () {

	var $crateImg = $('<img></img>').attr('src', crateURL );
	my.game.context.drawImage( $crateImg[0], 64, 96 );

    }
   */

    // I don't really understand window.onload so I'm probably doing this wrong.
    window.onload = function () {
	
	my.game.loadLevel( levelData[0] );
    }
    
    return my;
})();
