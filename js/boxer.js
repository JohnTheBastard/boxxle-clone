/* * * * * * * * * * * * * * * *
 * BOXER GAME                  *
 * Created by  John Hearn      *
 *             Max Jacobson    *
 *             Doug Popadince  *
 * CF201       Fall 2015       *
 * * * * * * * * * * * * * * * */

// all level data: this will eventually be moved to a JSON file
var levelData = [ { dimension: 10,
		    floor: [ [ 01, 01 ], [ 02, 01 ], [ 03, 01 ], [ 01, 02 ],
			     [ 02, 02 ], [ 03, 02 ], [ 01, 03 ], [ 02, 03 ],
			     [ 03, 03 ], [ 07, 03 ], [ 03, 04 ], [ 07, 04 ],
			     [ 03, 05 ], [ 04, 05 ], [ 05, 05 ], [ 06, 05 ],
			     [ 07, 05 ], [ 02, 06 ], [ 03, 06 ], [ 04, 06 ],
			     [ 06, 06 ], [ 07, 06 ], [ 02, 07 ], [ 03, 07 ],
			     [ 04, 07 ] ],
		    start: [ 01, 01 ],
		    crate: [ [ 02, 02 ], [ 03, 02 ], [ 02, 03 ] ],
		    dots:  [ [ 07, 03 ], [ 07, 04 ], [ 07, 05 ] ]
		  },
			{ dimension: 10,
				floor: [ [ 01, 01 ], [ 02, 01 ], [ 03, 01 ], [ 04, 01 ], [ 05, 01 ],
			  	 [ 06, 01 ], [ 07, 01 ], [ 08, 01 ], [ 01, 02 ], [ 02, 02 ],
					 [ 03, 02 ], [ 04, 02 ], [ 05, 02 ], [ 07, 02 ], [ 08, 02 ],
				 	 [ 01, 03 ], [ 02, 03 ], [ 04, 03 ], [ 07, 03 ], [ 01, 04 ],
				   [ 02, 04 ], [ 03, 04 ], [ 04, 04 ], [ 05, 04 ], [ 06, 04 ],
				   [ 07, 04 ], [ 05, 05 ], [ 07, 05 ], [ 03, 06 ], [ 04, 06 ],
				   [ 05, 06 ], [ 06, 06 ], [ 07, 06 ], [ 03, 07 ], [ 04, 07 ],
				   [ 05, 07 ], [ 06, 07 ], [ 07, 07 ], ],
				start: [ 06, 06 ],
			  crate: [ [ 03, 02 ], [ 04, 03 ], [ 02, 04 ], [ 04, 06 ] ],
			  dots: [ [ 01, 01 ], [ 02, 01 ], [ 01, 02 ], [ 02, 02 ], ]
			} ,
      { dimension: 10,
        floor: [ [ 02 , 01 ], [ 03 , 01 ], [ 01 , 02 ], [ 02 , 02 ],
           [ 03 , 02 ], [ 02 , 03 ], [ 03 , 03 ], [ 02 , 04 ], [ 03 , 04 ],
           [ 04 , 04 ], [ 01 , 05 ], [ 02 , 05 ], [ 03 , 05 ], [ 04 , 05 ],
           [ 01 , 06 ], [ 02 , 06 ], [ 03 , 06 ], [ 04 , 06 ] ],
        start: [ 01, 02 ],
        crate: [ [ 02, 02 ], [ 02, 03 ], [ 03, 04 ], [ 02, 05 ], [ 03, 06 ] ],
        dots: [ [ 01, 05 ], [ 01, 06 ], [ 02, 06 ], [ 03, 06 ], [ 04, 06 ] ]
      } ,
      { dimension: 10,
        floor: [ [ 02, 01 ], [ 03, 01 ], [ 02, 02 ], [ 03, 02 ], [ 04, 02 ],
           [ 05, 02 ], [ 02, 01 ], [ 03, 03 ], [ 05, 03 ], [ 01, 04 ],
           [ 03, 04 ], [ 05, 04 ], [ 06, 04 ], [ 01, 05 ], [ 02, 05 ],
           [ 03, 05 ], [ 04, 05 ], [ 06, 05 ], [ 01, 06 ], [ 02, 06 ],
           [ 03, 06 ], [ 04, 06 ], [ 05, 06 ], [ 06, 06 ], ],
        start: [ 02, 01 ],
        crate: [ [ 03, 02 ], [ 02, 05 ], [ 05, 06 ] ],
        dots: [ [ 01, 04 ], [ 01, 05 ], [ 01, 06 ] ]
      } ,
      { dimension: 10,
        floor: [ [ 02, 02 ], [ 03, 02 ], [ 04, 02 ], [ 05, 02 ], [ 06, 02 ],
           [ 02, 03 ], [ 06, 03 ], [ 07, 03 ], [ 08, 03 ], [ 01, 04 ],
           [ 02, 04 ], [ 03, 04 ], [ 04, 04 ], [ 05, 04 ], [ 06, 04 ],
           [ 07, 04 ], [ 08, 04 ], [ 01, 05 ], [ 02, 05 ], [ 03, 05 ],
           [ 05, 05 ], [ 06, 05 ], [ 07, 05 ], [ 02, 06 ], [ 03, 06 ],
           [ 05, 06 ], [ 06, 06 ], [ 07, 06 ] ],
        start: [ 02, 04 ],
        crate: [ [ 02, 03 ], [ 04, 04 ], [ 06, 05 ], [ 07, 04 ] ],
        dots: [ [ 02, 05 ], [ 03, 05 ], [ 02, 06 ], [ 03, 06 ] ]
      }  ,
      { dimension: 15,
        floor: [ [ 08, 01 ], [ 09, 01 ], [ 08, 02 ], [ 09, 02 ], [ 04, 03 ],
           [ 05, 03 ], [ 06, 03 ], [ 07, 03 ], [ 08, 03 ], [ 09, 03 ],
           [ 01, 04 ], [ 02, 04 ], [ 03, 04 ], [ 04, 04 ], [ 08, 04 ],
           [ 01, 05 ], [ 03, 05 ], [ 05, 05 ], [ 06, 05 ], [ 07, 05 ],
           [ 08, 05 ], [ 01, 06 ], [ 03, 06 ], [ 04, 06 ], [ 05, 06 ],
           [ 06, 06 ], [ 08, 06 ], [ 09, 06 ], [ 01, 07 ], [ 03, 07 ],
           [ 04, 07 ], [ 05, 07 ], [ 06, 07 ], [ 07, 07 ], [ 09, 07 ],
           [ 01, 08 ], [ 02, 08 ], [ 04, 08 ], [ 05, 08 ], [ 06, 08 ],
           [ 07, 08 ], [ 09, 08 ], [ 02, 09 ], [ 03, 09 ], [ 04, 09 ],
           [ 05, 09 ], [ 07, 09 ], [ 09, 09 ], [ 01, 09 ], [ 02, 10 ],
           [ 06, 10 ], [ 07, 10 ], [ 08, 10 ], [ 09, 10 ], [ 02, 11 ],
           [ 03, 11 ], [ 04, 11 ], [ 05, 11 ], [ 06, 11 ] ],
         start: [ 08, 01 ],
         crate: [ [ 04, 06 ], [ 06, 06 ], [ 05, 07 ], [ 04, 08 ], [ 06, 08 ] ],
         dots: [ [ 04, 04 ], [ 02, 08 ], [ 08, 06 ], [ 05, 07 ], [ 06, 10] ]
       } ,
		  { dimension: 10,
				floor: [ [ 04, 01 ], [ 05, 01], [ 07, 01 ], [ 08, 01 ], [ 03, 02 ],
			  	 [ 04, 02 ], [ 05, 02 ], [ 07, 02 ], [ 08, 02 ], [ 03, 03 ],
				   [ 04, 03 ], [ 05, 03 ], [ 06, 03 ], [ 07, 03 ], [ 08, 03 ],
				   [ 03, 04 ], [ 04, 04 ], [ 07, 04 ], [ 08, 04 ], [ 03, 05 ],
				   [ 04, 05 ], [ 05, 05 ], [ 07, 05 ], [ 01, 06 ], [ 02, 06 ],
				   [ 03, 06 ], [ 04, 06 ], [ 05, 06 ], [ 06, 06 ], [ 07, 06 ] ],
				start: [ 08, 01 ],
			  crate: [ [ 03, 03 ], [ 05, 03 ], [ 07, 03 ], [ 04, 04 ], [ 04, 05 ] ],
			  dots: [ [ 01, 06 ], [ 02, 06 ], [ 03, 06 ], [ 04, 06 ], [ 05, 06 ] ]
			  } ,
	      { dimension: 10,
	        floor: [ [ 04, 01 ], [ 05, 01 ], [ 06, 01 ], [ 07, 01 ], [ 02, 02 ],
	           [ 03, 02 ], [ 04, 02 ], [ 07, 02 ], [ 01, 03 ], [ 02, 03 ],
	           [ 03, 03 ], [ 04, 03 ], [ 05, 03 ], [ 06, 03 ], [ 07, 03 ],
	           [ 08, 03 ], [ 01, 04 ], [ 02, 04 ], [ 03, 04 ], [ 04, 04 ],
	           [ 05, 04 ], [ 06, 04 ], [ 07, 04 ], [ 05, 05 ], [ 06, 05 ],
	           [ 07, 05 ] ],
	        start: [ 08, 03 ],
	        crate: [ [ 04, 02 ], [ 03, 03 ], [ 05, 03 ], [ 04, 04 ], [ 06, 04 ] ],
	        dots: [ [ 02, 02 ], [ 01, 03 ], [ 02, 03 ], [ 01, 04 ], [ 02, 04 ] ]
	       }  ,
	       { dimension: 10,
	         floor: [ [ 02, 01 ], [ 03, 01 ], [ 06, 01 ], [ 07, 01 ], [ 08, 01 ],
	            [ 02, 02 ], [ 03, 02 ], [ 04, 02 ], [ 05, 02 ], [ 06, 02 ],
	            [ 07, 02 ], [ 08, 02 ], [ 02, 03 ], [ 03, 03 ], [ 07, 03 ],
	            [ 08, 03 ], [ 02, 04 ], [ 04, 04 ], [ 05, 04 ], [ 06, 04 ],
	            [ 08, 04 ], [ 02, 05 ], [ 04, 05 ], [ 05, 05 ], [ 06, 05 ],
	            [ 08, 05 ], [ 01, 06 ], [ 02, 06 ], [ 03, 06 ], [ 04, 06 ],
	            [ 05, 06 ], [ 06, 06 ], [ 07, 06 ], [ 08, 06 ], [ 09, 06 ],
	            [ 01, 07 ], [ 02, 07 ], [ 03, 07 ], [ 04, 07 ], [ 05, 07 ],
	            [ 07, 07 ], [ 08, 07 ], [ 09, 07 ] ],
	         start: [ 08, 07 ],
	         crate: [ [ 05, 02 ], [ 02, 03 ], [ 08, 03 ], [ 02, 06 ], [ 05, 06 ],
	            [ 08, 06 ] ],
	          dots: [ [ 04, 04 ], [ 05, 04 ], [ 06, 04 ], [ 04, 05 ], [ 05, 05 ],
	            [ 06, 05 ] ]
	         },
	       { dimension: 10,
	         floor: [ [ 03, 01 ], [ 04, 01 ], [ 05, 01 ], [ 06, 01 ], [ 03, 02 ],
	            [ 04, 02 ], [ 05, 02 ], [ 06, 02 ], [ 01, 03 ], [ 02, 03 ],
	            [ 03, 03 ], [ 04, 03 ], [ 05, 03 ], [ 06, 03 ], [ 01, 04 ],
	            [ 02, 04 ], [ 03, 04 ], [ 04, 04 ], [ 05, 04 ], [ 04, 05 ],
	            [ 05, 05 ] ],
	         start: [ 01, 03 ],
	         crate: [ [ 03, 02 ], [ 04, 02 ], [ 05, 02 ], [ 03, 03 ], [ 02, 04 ] ],
	         dots:  [ [ 04, 03 ], [ 05, 03 ], [ 03, 04 ], [ 04, 04 ], [ 05, 04 ] ]
	       } ,
				 { dimension: 10,
			     floor: [ [ 01, 01 ], [ 02, 01 ], [ 07, 01 ], [ 08, 01 ], [ 09, 01 ],
				      [ 00, 02 ], [ 01, 02 ], [ 02, 02 ], [ 07, 02 ], [ 08, 02 ],
						  [ 09, 02 ], [ 00, 03 ], [ 01, 03 ], [ 02, 03 ], [ 03, 03 ],
						  [ 04, 03 ], [ 05, 03 ], [ 06, 03 ], [ 07, 03 ], [ 08, 03 ],
						  [ 09, 03 ], [ 01, 04 ], [ 02, 04 ], [ 03, 04 ], [ 04, 04 ],
						  [ 06, 04 ], [ 07, 04 ], [ 08, 04 ] ],
					 start: [ 07, 04 ],
					 crate: [ [ 01, 02 ], [ 02, 03 ], [ 07, 02 ], [ 08, 03 ] ],
				   dots: [ [ 03, 03 ], [ 04, 03 ], [ 05, 03 ], [ 06, 03 ] ]
				 } ,
				 { dimension: 10,
				         floor: [ [ 02, 01 ], [ 03, 01 ], [ 04, 01 ], [ 05, 01 ], [ 06, 01 ],
							      [ 02, 02 ], [ 03, 02 ], [ 04, 02 ], [ 03, 03 ], [ 04, 03 ],
									  [ 05, 03 ], [ 06, 03 ], [ 07, 03 ], [ 01, 04 ], [ 02, 04 ],
									  [ 03, 04 ], [ 05, 04 ], [ 07, 04 ], [ 01, 05 ], [ 02, 05 ],
									  [ 03, 05 ], [ 05, 05 ], [ 06, 05 ], [ 07, 05 ], [ 01, 06 ],
									  [ 02, 06 ], [ 03, 06 ] ],
								 start: [ 03, 01 ],
							   crate: [ [ 03, 03 ], [ 02, 05 ], [ 05, 04 ] ],
							   dots: [ [ 04, 01 ], [ 05, 01 ], [ 06, 01 ] ]
							 } ,
						   { dimension: 10,
							 	 floor: [ [ 03, 01 ], [ 04, 01 ], [ 03, 02 ], [ 04, 02 ], [ 01, 03 ],
							      [ 02, 03 ], [ 03, 03 ], [ 04, 03 ], [ 05, 03 ], [ 06, 03 ],
									  [ 07, 03 ], [ 01, 04 ], [ 02, 04 ], [ 03, 04 ], [ 04, 04 ],
									  [ 05, 04 ], [ 06, 04 ], [ 07, 04 ], [ 03, 05 ], [ 04, 05 ],
									  [ 04, 05 ], [ 03, 06 ], [ 04, 06 ] ],
								 start: [ 01, 04 ],
							   crate: [ [ 02, 04 ], [ 04, 03 ], [ 04, 05 ], [ 06, 04 ] ],
							   dots: [ [ 03, 03 ], [ 03, 04 ], [ 04, 03 ], [ 04, 04 ] ]
							 } ,
						   { dimension: 10,
							   floor: [ [ 02, 01 ], [ 03, 01 ], [ 04, 01 ], [ 05, 01 ], [ 01, 02 ],
							      [ 02, 02 ], [ 03, 02 ], [ 04, 02 ], [ 05, 02 ], [ 01, 03 ],
									  [ 02, 03 ], [ 03, 03 ], [ 04, 03 ], [ 05, 03 ], [ 01, 04 ],
									  [ 02, 04 ], [ 03, 04 ], [ 04, 04 ], [ 05, 04 ], [ 01, 05 ],
										[ 02, 05 ], [ 03, 05 ], [ 04, 05 ] ],
								 start: [ 05, 01 ],
							 	 crate: [ [ 02, 02 ], [ 04, 02 ], [ 03, 03 ], [ 02, 04 ], [ 04, 04 ] ],
							   dots: [ [ 03, 01 ], [ 01, 03 ], [ 03, 03 ], [ 05, 03 ], [ 03, 05 ] ]
							 } ,
						   { dimension: 10,
							   floor: [ [ 01, 01 ], [ 02, 01 ], [ 03, 01 ], [ 04, 01 ], [ 05, 01 ],
							      [ 06, 01 ], [ 07, 01 ], [ 01, 02 ], [ 02, 02 ], [ 03, 02 ],
										[ 04, 02 ], [ 05, 02 ], [ 06, 02 ], [ 07, 02 ], [ 01, 03 ],
										[ 02, 03 ], [ 03, 03 ], [ 04, 03 ], [ 05, 03 ], [ 06, 03 ],
										[ 07, 03 ], [ 01, 04 ], [ 02, 04 ], [ 03, 04 ], [ 04, 04 ],
									  [ 05, 04 ], [ 06, 04 ], [ 07, 04 ], [ 01, 05 ], [ 02, 05 ],
										[ 03, 05 ], [ 04, 05 ], [ 05, 05 ], [ 06, 05 ], [ 07, 05 ],
									  [ 01, 06 ], [ 02, 06 ], [ 03, 06 ], [ 04, 06 ], [ 05, 06 ],
									  [ 06, 06 ], [ 07, 06 ], [ 01, 07 ], [ 02, 07 ], [ 03, 07 ],
									  [ 04, 07 ], [ 05, 07 ], [ 06, 07 ], [ 07, 07 ] ],
									start: [ 07, 07 ],
								  crate: [ [ 02, 02 ], [ 04, 02 ], [ 06, 02 ], [ 03, 03 ], [ 05, 03 ],
								    [ 02, 04 ], [ 04, 04 ], [ 06, 04 ], [ 03, 05 ], [ 05, 05 ],
									  [ 02, 06 ], [ 04, 06 ], [ 06, 06 ] ],
									dots: [ [ 03, 02 ], [ 05, 02 ], [ 02, 03 ], [ 04, 03 ], [ 06, 03 ],
								    [ 03, 04 ], [ 04, 04 ], [ 05, 04 ], [ 02, 05 ], [ 04, 05 ],
									  [ 06, 05 ], [ 03, 06 ], [ 05, 06 ] ]
									} ,
									{ dimension: 10,
										floor: [ [ 01, 01 ], [ 02, 01 ], [ 03, 01 ], [ 04, 01 ], [ 05, 01 ],
					 			       [ 06, 01 ], [ 07, 01 ], [ 01, 02 ], [ 02, 02 ], [ 03, 02 ],
					 						 [ 04, 02 ], [ 05, 02 ], [ 06, 02 ], [ 07, 02 ], [ 01, 03 ],
					 						 [ 02, 03 ], [ 03, 03 ], [ 04, 03 ], [ 05, 03 ], [ 06, 03 ],
					 						 [ 07, 03 ], [ 01, 04 ], [ 02, 04 ], [ 03, 04 ], [ 05, 04 ],
											 [ 06, 04 ], [ 07, 04 ], [ 01, 05 ], [ 02, 05 ], [ 03, 05 ],
											 [ 04, 05 ], [ 05, 05 ], [ 06, 05 ], [ 07, 05 ], [ 01, 06 ],
											 [ 02, 06 ], [ 03, 06 ], [ 04, 06 ], [ 05, 06 ], [ 06, 06 ],
											 [ 07, 06 ] ],
										start: [ 04, 06 ],
									  crate: [ [ 01, 02 ], [ 02, 02 ], [ 03, 02 ], [ 05, 02 ], [ 06, 02 ],
										   [ 07, 02 ], [ 01, 05 ], [ 02, 05 ], [ 03, 05 ], [ 04, 05 ],
											 [ 05, 05 ], [ 06, 05 ], [ 07, 05 ] ],
										dots: [ [ 01, 03 ], [ 02, 03 ], [ 03, 03 ], [ 04, 03 ], [ 05, 03 ],
										   [ 06, 03 ], [ 07, 03 ], [ 01, 04 ], [ 02, 04 ], [ 03, 04 ],
											 [ 05, 04 ], [ 06, 04 ], [ 07, 04 ] ]
										}  ,
										{ dimension: 10,
											floor: [ [ 01, 01 ], [ 02, 01 ], [ 03, 01 ], [ 06, 01 ], [ 07, 01 ],
										     [ 01, 02 ], [ 02, 02 ], [ 03, 02 ], [ 04, 02 ], [ 05, 02 ],
											   [ 06, 02 ], [ 07, 02 ], [ 01, 03 ], [ 02, 03 ], [ 03, 03 ],
											   [ 05, 03 ], [ 06, 03 ], [ 03, 04 ], [ 06, 04 ], [ 01, 05 ],
											   [ 02, 05 ], [ 03, 05 ], [ 04, 05 ], [ 05, 05 ], [ 06, 05 ],
											   [ 07, 05 ], [ 08, 05 ], [ 01, 06 ], [ 02, 06 ], [ 03, 06 ],
											   [ 06, 06 ], [ 08, 06 ], [ 01, 07 ], [ 02, 07 ], [ 03, 07 ],
											   [ 04, 07 ], [ 05, 07 ], [ 06, 07 ], [ 07, 07 ], [ 08, 07 ] ],
											 start: [ 07, 02 ],
										   crate: [ [ 02, 02 ], [ 03, 03 ], [ 06, 02 ], [ 03, 06 ], [ 04, 05 ],
										     [ 06, 06 ], [ 05, 07 ] ],
											 dots: [ [ 01, 01 ], [ 02, 01 ], [ 03, 01 ], [ 01, 02 ], [ 02, 02 ],
										     [ 03, 02 ], [ 08, 07 ] ]
										} ,
									  { dimension: 10,
											floor: [ [ 01, 01 ], [ 02, 01 ], [ 03, 01 ], [ 04, 01 ], [ 05, 01 ],
										     [ 01, 02 ], [ 02, 02 ], [ 03, 02 ], [ 04, 02 ], [ 05, 02 ],
											   [ 01, 03 ], [ 02, 03 ], [ 03, 03 ], [ 04, 03 ], [ 05, 03 ],
											   [ 01, 04 ], [ 02, 04 ], [ 03, 04 ], [ 04, 04 ], [ 05, 04 ],
											   [ 01, 05 ], [ 02, 05 ], [ 03, 05 ], [ 04, 05 ], [ 05, 05 ],
											   [ 01, 06 ], [ 02, 06 ], [ 03, 06 ], [ 04, 06 ], [ 05, 06 ],
											   [ 01, 07 ], [ 02, 07 ], [ 03, 07 ], [ 04, 07 ], [ 05, 07 ] ],
											start: [ 05, 01 ],
											crate: [ [ 02, 02 ], [ 03, 02 ], [ 04, 02 ], [ 01, 04 ], [ 02, 04 ],
										 	   [ 03, 04 ], [ 04, 04 ], [ 05, 04 ], [ 02, 06 ], [ 03, 06 ],
												 [ 04, 06 ] ],
											dots: [ [ 03, 01 ], [ 01, 02 ], [ 03, 02 ], [ 02, 03 ], [ 03, 03 ],
											   [ 03, 04 ], [ 03, 05 ], [ 04, 05 ], [ 03, 06 ], [ 05, 06 ],
											   [ 03, 07 ] ]
										 }  ,
									   { dimension: 10,
										   floor: [ [ 02, 01 ], [ 03, 01 ], [ 04, 01 ], [ 05, 01 ], [ 06, 01 ],
											    [ 07, 01 ], [ 08, 01 ], [ 09, 01 ], [ 01, 02 ], [ 02, 02 ],
													[ 03, 02 ], [ 04, 02 ], [ 05, 02 ], [ 06, 02 ], [ 07, 02 ],
													[ 08, 02 ], [ 09, 02 ], [ 01, 03 ], [ 02, 03 ], [ 03, 03 ],
													[ 04, 03 ], [ 05, 03 ], [ 06, 03 ], [ 07, 03 ], [ 08, 03 ],
													[ 09, 03 ], [ 01, 04 ], [ 02, 04 ], [ 03, 04 ], [ 04, 04 ],
													[ 05, 04 ], [ 06, 04 ], [ 07, 04 ], [ 08, 04 ], [ 09, 04 ],
													[ 01, 05 ], [ 02, 05 ], [ 03, 05 ], [ 04, 05 ], [ 05, 05 ],
													[ 06, 05 ], [ 07, 05 ], [ 08, 05 ], [ 09, 05 ] ],
											 start: [ 09, 03 ],
										   crate: [ [ 03, 01 ], [ 06, 01 ], [ 08, 01 ], [ 03, 02 ], [ 06, 02 ],
											    [ 08, 02 ], [ 03, 03 ], [ 06, 03 ], [ 08, 03 ], [ 03, 04 ],
													[ 06, 04 ], [ 08, 04 ], [ 03, 05 ], [ 06, 05 ], [ 08, 05 ] ],
											 dots: [ [ 06, 01 ], [ 06, 02 ], [ 06, 03 ], [ 06, 04 ], [ 06, 05 ],
											    [ 07, 01 ], [ 07, 02 ], [ 07, 03 ], [ 07, 04 ], [ 07, 05 ],
						 							[ 08, 01 ], [ 08, 02 ], [ 08, 03 ], [ 08, 04 ], [ 08, 05 ] ]
												}  ]
var easyLevelsString = JSON.stringify(easyLevels);
var hardLevelsString = JSON.stringify(hardLevels);
var levelDataObject = JSON.parse(easyLevelsString);
console.log(levelDataObject.levelDataEasy[0].dimension)
var mobile = false;
if ( mobile ) {
    var cellWidth = 16;
} else {
    var cellWidth = 32;
}

var listenToKeystrokes = true;

var wallURL = "img/RedBrick.png";
var floorURL = "img/FloorTile.png";
var crateURL = "img/WoodenCrate.png";
var crateOnDotURL = "img/WoodenCrateOnDot.png"
var dotsURL  = "img/DotTile.png";
var spriteURL = "img/Sprite.png";
var currentLevel = 18;


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
    this.hasCrate = false;

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
    this.stepCount = 0;
}

function GameBoard(levelData) {
    this.boardData = levelData;
    this.winCondition = false;
    this.coordinates = [ ];
    this.crates = [ ];
		this.currentLevel = 0;

    this.$canvasJQ = $('<canvas></canvas>');
    this.canvas = this.$canvasJQ[0];
    this.context = this.canvas.getContext("2d");
    this.canvas.width = this.boardData.dimension * cellWidth;
    this.canvas.height = this.boardData.dimension * cellWidth;
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
    for ( var ii = 0; ii < this.boardData.dimension; ii++ ) {
	for ( var jj = 0; jj < this.boardData.dimension; jj++ ) {
	    this.coordinates.push( [ ] );
	    this.coordinates[jj].push( new Coord( "wall", wallURL ) );
	    this.$elementJQ.append( this.coordinates[jj][ii].$div );
	}
    }



    /* * * * * * * * * * * * * * * *
     * * * * Member Methods  * * * *
     * * * * * * * * * * * * * * * */

    // Chrome needs me to access parameter arrays this way.
    this.updateCell = function( xy, tileType, tileURL, crateStatus) {
	this.coordinates[ xy[0] ][ xy[1] ].tile = tileType;
	this.coordinates[ xy[0] ][ xy[1] ].$img.attr( 'src', tileURL );
	this.coordinates[ xy[0] ][ xy[1] ].hasCrate = crateStatus;

    }

    this.init = function() {
	// update floor tiles
	for ( var ii = 0; ii < this.boardData.floor.length; ii++ ) {
	    this.updateCell(this.boardData.floor[ii], "floor", floorURL, false );
	}
	// update dot tiles
	for ( var ii = 0; ii < this.boardData.dots.length; ii++ ) {
	    this.updateCell(this.boardData.dots[ii], "dot", dotsURL, false );
	}

	// make our crates
	for ( var ii = 0; ii < this.boardData.crate.length; ii++ ) {
	    this.crates.push( new Crate( this.boardData.crate[ii] ) );
	    this.crates[ii].onDot = this.coordinates[ this.boardData.crate[ii][0] ][ this.boardData.crate[ii][1] ].isADot();
	    this.coordinates[ this.boardData.crate[ii][0] ][ this.boardData.crate[ii][1] ].hasCrate = true;
	    if ( this.crates[ii].onDot) {
		this.crates[ii].$crateImg.attr('src', crateOnDotURL );
	    }

	}

	// make a sprite
	this.sprite = new Sprite( this.boardData.start );

	this.draw();
    }

    this.findCrate = function( xy ) {
	for (var ii = 0; ii < this.crates.length; ii++ ) {
	    if ( xy[0] == this.crates[ii].x && xy[1] == this.crates[ii].y ) {
		return ii;
	    }
	}
	console.log("Error: crate not found.");
    }

    this.checkWinCondition = function() {
	var onDotCounter = 0;
	for (var ii = 0; ii < this.crates.length; ii++ ) {
	    if ( this.crates[ii].onDot ) {
		onDotCounter++;
	    }
	}
	if ( onDotCounter == this.crates.length ) {
	    // win condition satisfied!!
	    // trigger end of level

			currentLevel++;
	    console.log("You win!");
	    console.log("You used " + this.sprite.stepCount + " steps.");
	    return true;

	} else {
	    return false;
	}
    }

    this.updateCrateStatus = function(crateIndex, oldPosition, newPosition) {

	this.coordinates[ oldPosition[0] ][ oldPosition[1] ].hasCrate = false;
	this.coordinates[ newPosition[0] ][ newPosition[1] ].hasCrate = true;

	if ( this.coordinates[ newPosition[0] ][ newPosition[1] ].isADot() ){
	    this.crates[crateIndex].onDot = true;
	    this.crates[crateIndex].$crateImg.attr('src', crateOnDotURL );
	} else {
	    this.crates[crateIndex].onDot = false;
	}

	this.winCondition = this.checkWinCondition();

    }

    // draw our sprite and crates to the canvas
     this.draw = function() {
	 this.context.clearRect(0, 0, this.canvas.width, this.canvas.height );
	 for ( var ii = 0; ii < this.crates.length; ii++ ) {
	     this.context.drawImage( this.crates[ii].$crateImg[0], this.crates[ii].x, this.crates[ii].y );
	 }
	 this.context.drawImage(this.sprite.$img[0], this.sprite.x, this.sprite.y );
    }

    this.move = function(deltaXY, withCrate) {
	listenToKeystrokes = false;
	var x = this.sprite.x;
	var y = this.sprite.y;
	var self = this;
	var draw = this.draw.bind(this);
	var counter = 0;
	var frames = cellWidth;

	if ( withCrate ) {

	    var crateIndex = self.findCrate([ x + deltaXY[0]*cellWidth ,  y + deltaXY[1]*cellWidth ]);
	    var xCrate = self.crates[crateIndex].x;
	    var yCrate = self.crates[crateIndex].y;
	}

	function drawFrame(fraction) {
	    // This looks weird, but we'll be sure that the sprite ends in
	    // a valid location when setTimeout calls drawFrame(1)
	    self.sprite.x = x + ( cellWidth * deltaXY[0] * fraction );
	    self.sprite.y = y + ( cellWidth * deltaXY[1] * fraction );
	    if ( withCrate ) {
		self.crates[crateIndex].x = xCrate + ( cellWidth * deltaXY[0] * fraction );
		self.crates[crateIndex].y = yCrate + ( cellWidth * deltaXY[1] * fraction );
	    }
	    requestAnimationFrame(draw);
	}

	var interval = setInterval(function(){
	    counter++;
	    drawFrame(counter/frames);
	}, 256 / cellWidth );

	setTimeout(function(){
	    clearInterval(interval);
	    drawFrame(1);
	    if ( withCrate ) {
		self.updateCrateStatus(crateIndex,
				       [xCrate / cellWidth ,yCrate / cellWidth ],
				       [ xCrate/cellWidth + deltaXY[0] ,  yCrate/cellWidth + deltaXY[1] ] );
	    }
	    self.sprite.stepCount++;
	    listenToKeystrokes = true;
	}, 256);
    }

    this.tryToMove = function( xy, deltaXY ) {
	var x = xy[0];
	var y = xy[1];
	var dx = deltaXY[0];
	var dy = deltaXY[1];

	var nextLocation = this.coordinates[ x + dx ][ y + dy ];

	// Make sure two spaces away is on the board
	if ( ( 0 <= x + 2*dx && x + 2*dx < this.boardData.dimension ) &&
	     ( 0 <= y + 2*dy && y + 2*dy < this.boardData.dimension ) ) {
	    var twoAway = this.coordinates[ x + 2*dx ][ y + 2*dy ];
	    twoAway.exists = true;
	} else {
	    // Two spaces away would be off the board
	    var twoAway = {};
	    twoAway.exists = false;
	}

	if ( nextLocation.tile == "wall" ) {
	    return;
	} else if ( nextLocation.hasCrate ) {
	    if ( twoAway.exists && !twoAway.hasCrate && twoAway.tile != "wall" ) {
		// move with crate
		this.move(deltaXY, true);
	    }
	    return;
	} else if ( ( nextLocation.tile == "floor" ) ||
		    ( nextLocation.tile == "dot") ) {
	    this.move(deltaXY, false);
	    return;
	} else {
	    console.log("error");
	}
    }

}

var BOXER_GAME_MODULE = (function() {
    var my = {};
    my.$anchor = $( "#gameBoard" );

    // I don't really understand window.onload behavior
    // so I'm probably doing this wrong.


		window.onload = function () {
					my.game = new GameBoard( levelData[currentLevel] );
					my.game.init();
					my.$anchor.append( my.game.$elementJQ );
					my.$anchor.append( my.game.$canvasJQ );
		}


    my.processInput = function(key) {
	var keyvalue = key.keyCode;
	var xy = [ (my.game.sprite.x / cellWidth), (my.game.sprite.y / cellWidth) ];
  if ( listenToKeystrokes  && !my.game.winCondition ) {
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
	    my.game.tryToMove( xy, deltaXY );
	}
    }


    my.eventListener= function() {
	window.addEventListener("keydown", my.processInput, false);
	// prevent scrolling (doesn't work yet)
	document.body.addEventListener("scroll", function(e){e.preventDefault();});
    }
    my.eventListener();

    return my;
})();
