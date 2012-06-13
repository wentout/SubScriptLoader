( function( undefined ){
    try{
        var _js = window._create.noConflict();
        var num = 0;
        var scope = {
            info : function( str ){
                num++;
                $('#example').html( $('#example').html() + '' + num + '. ' + str + '<br>' );
            }
        };
        var returnCallbackJQ = function( obj ){
            scope.info( obj );
        };
        var returnCallbackStandalone = function( obj ){
            $.loadSubScript( './test.js', scope, { name: 'My Scope Name came from $.loadSubScript.' }, returnCallbackJQ );
        };

        window.setTimeout( function(){
            _js.load( './test.js', scope, { name: 'My Scope Name came from _js.load.' }, returnCallbackStandalone );
        }, 300 );
    
    }catch(e){ alert(e); }
})();