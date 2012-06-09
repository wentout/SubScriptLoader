var _create = ( function( undefined ){
    this.noConflict = function(){
        try{
            window._create = undefined;
            delete window._create;
            return this;
        }catch(e){ alert(e); }
    };
    return this;
}).call( { load : function( url, scope, thisName, returnCallback ){
    var scope = scope || window;
    var thisRef = thisRef || window;
    if( thisRef === true ){ thisRef = namespace; }
    
    $.ajax( {
          url: url
        , type: 'POST'
        , dataType: 'text'
        , success: function( data ){
            try{
                
                // var fns = ( function(){
                    // return new Function( 'with( this ){ return ' + Function.apply( null, arguments ).toString() + '; }' );
                // } ).apply( namespace, [ data ] );

                var fns = new Function( 'with( this ){ return ' + Function.apply( null, [ data ] ) + '; }' );
                fns = fns.call( scope );
                var turn = fns.call( thisName );
                returnCallback && returnCallback( turn );
                
            }catch(e){ alert(e); }
        }
        , error: function(jqXHR, textStatus, errorThrown){ alert('Loader Error:\n' + errorThrown ); }
    } );
} } );