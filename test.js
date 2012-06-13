return (function(){
    
    ( function( name ){
        window.setTimeout( function(){
            info( 'Hello!' );
            info( name );
        } , 500 );
    } )( this.name );
    
    return '<strong>This is Sparta!</strong>';
    
}).call( this );