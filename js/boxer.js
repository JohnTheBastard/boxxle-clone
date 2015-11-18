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
var spriteURL = "img/Sprite.png";

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

    this.isADot = function() {
	if ( this.tile == "dot" ) {
	    return true;
	} else {
	    return false;
	}
    }
}

function Crate( xy ) {
    this.x = xy[0] * cellWidth;
    this.y = xy[1] * cellWidth;
    this.onDot = false;
    this.$crateImg = $('<img></img>').attr('src', crateURL );    
}

function Sprite( xy ) {
    this.x = xy[0] * cellWidth;
    this.y = xy[1] * cellWidth;
    this.$img = $('<img></img>').attr('src', spriteURL );    
}

function GameBoard() {
    this.coordinates = [ ];
    this.$canvasJQ = $('<canvas></canvas>');
    this.canvas = this.$canvasJQ[0];
    this.context = this.canvas.getContext("2d");
    this.canvas.width = 640;
    this.canvas.height = 640;
    this.canvas.style.position = "absolute";
    this.canvas.style.left = 0;
    this.canvas.style.top = 0;
    this.canvas.style.zIndex = "10";
    this.$elementJQ = $('<section></section>').attr( 'id', "container" );
    this.element = this.$elementJQ[0];
    this.element.style.position = "absolute";
    this.element.style.left = 0;
    this.element.style.top = 0;
    this.element.style.zIndex = "0";
    for ( var ii = 0; ii < 20; ii++ ) {
	for ( var jj = 0; jj < 20; jj++ ) {
	    this.coordinates.push( [ ] );
	    this.coordinates[jj].push( new Coord( "wall", wallURL ) );
	    this.$elementJQ.append( this.coordinates[jj][ii].$div );
	}
    }

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
	    this.updateCell(levelObject.dots[ii], "dot", dotsURL );
	}
	
	// make our crates
	for ( var ii = 0; ii < levelObject.crate.length; ii++ ) {
	    this.crates.push( new Crate( levelObject.crate[ii] ) );
	    this.crates[ii].onDot = this.coordinates[ levelObject.crate[ii][0] ][ levelObject.crate[ii][1] ].isADot();
	    //this.context.drawImage( this.crates[ii].$crateImg[0], this.crates[ii].x, this.crates[ii].y );
	}

	// make a sprite
	this.sprite = new Sprite( levelObject.start );

	this.draw();
    }

    // draw our sprite and crates to the canvas
     this.draw = function() {
	 this.context.clearRect(0, 0, this.canvas.width, this.canvas.height );
	 for ( var ii = 0; ii < this.crates.length; ii++ ) {
	     this.context.drawImage( this.crates[ii].$crateImg[0], this.crates[ii].x, this.crates[ii].y );
	 }
	 this.context.drawImage(this.sprite.$img[0], this.sprite.x, this.sprite.y );
    }

    
    this.tryToMove = function( deltaXY ) {
	if ( true ) {  //we'll add collision detection here later
	    var x = this.sprite.x;
	    var y = this.sprite.y;

	    var self = this;
	    var draw = this.draw.bind(this);
	    var counter = 0;
	    var frames = 32;

	    function drawFrame(fraction) {
	   	self.sprite.x = x + ( cellWidth * deltaXY[0] * fraction );
		self.sprite.y = y + ( cellWidth * deltaXY[1] * fraction );
		requestAnimationFrame(draw);
	    //requestAnimationFrame(function(){ this.draw(); } );
	    }
	    
	    var interval = setInterval(function(){
		counter++;
		drawFrame(counter/frames);
	    }, 256 / 32 );
	    
	    setTimeout(function(){
		clearInterval(interval);
		drawFrame(1);
	    }, 256);
	    //this.draw();
	}
    }
    
}

var BOXER_GAME_MODULE = (function() {
    var my = {};
    my.$anchor = $( "#gameBoard" );
 	
    // I don't really understand window.onload so I'm probably doing this wrong.
    window.onload = function () {
	my.game = new GameBoard();
	my.$anchor.append( my.game.$elementJQ );
	my.$anchor.append( my.game.$canvasJQ );
	my.game.loadLevel( levelData[0] );
    }
    
    my.processInput = function(key) {
	// console.log("The counter is : " + counter);
	var keyvalue = key.keyCode;
	// var currentLocationX = spriteLocation[0];
	// var currentLocationY = spriteLocation[1];
	var deltaXY = [ ];
	if (keyvalue == 37) {
	    console.log("left");
	    deltaXY = [ -1, 0 ];

	} else if (keyvalue == 38) {
	    console.log("up");
	    deltaXY = [ 0, -1 ];

	} else if (keyvalue == 39) {
	    console.log("right");
	    deltaXY = [ 1, 0 ];

	} else if (keyvalue == 40) {
 	    console.log("down");
	    deltaXY = [ 0, 1 ];
	} else {
	    return;
	}
	my.game.tryToMove( deltaXY );
    }
    
    


    my.eventListener= function() {
	window.addEventListener("keydown", my.processInput, false);
	// prevent scrolling (doesn't work yet)
	document.body.addEventListener("scroll", function(e){e.preventDefault();});
    }
    my.eventListener();

/*
    setTimeout(foo, 15);
    bool keystrokesMatter = true;
    if (on press can move)
    kestrokesMatter = false;
    }
    foo = function() {
	if (gonnaAnimate) {
	    my.updateAnimation();
	    setTimeout(foo, 15);
	} else {
	    keystrokesMatter = true;
	}
    }

*/
    
    return my;
})();
