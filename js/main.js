new ElastiStack( element, {
	// distDragBack: if the user stops dragging the image in a area that does not exceed [distDragBack]px
	// for either x or y then the image goes back to the stack
	distDragBack : 200,
	// distDragMax: if the user drags the image in a area that exceeds [distDragMax]px
	// for either x or y then the image moves away from the stack
	distDragMax : 450,
	// callback
	onUpdateStack : function( current ) { return false; }
} );
