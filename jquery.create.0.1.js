(function( jQuery, undefined ){
jQuery.loadSubScript = function( url, scope, thisName, returnCallback ){
    var scope = scope || window;
    var thisName = thisName || window;
    
    $.ajax( {
          url: url
        , type: 'GET'
        , dataType: 'text'
        , success: function( data ){
            try{
                
                var fns = new Function( 'with( this ){ return ' + Function.apply( null, [ data ] ) + '; }' );
                fns = fns.call( scope );
                var turn = fns.call( thisName );
                returnCallback && returnCallback( turn );
                
            }catch(e){ alert(e); }
        }
        , error: function(jqXHR, textStatus, errorThrown){ alert('Loader Error:\n' + errorThrown ); }
    } );        
};
})( jQuery );