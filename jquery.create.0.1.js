(function( jQuery, undefined ){
jQuery.loadSubscript = function( url, scope, thisName, returnCallback ){
    var scope = scope || window;
    var thisRef = thisRef || window;
    if( thisRef === true ){ thisRef = namespace; }
    
    $.ajax( {
          url: url
        , dataType: 'text'
        , success: function( data ){
            try{
                
                var fns = new Function( 'with( this ){ return ' + Function.apply( null, [ data ] ) + '; }' );
                fns = fns.call( scope );
                var turn = fns.call( thisName );
                returnCallback && returnCallback( turn );
                
            }catch(e){ alert(e); }
        }
        , error: function(){ alert('Loader Error:\n' + e ); }
    } );        
};
})( jQuery );