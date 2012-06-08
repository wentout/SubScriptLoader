( function( undefined ){
    try{
        var _js = window._create.noConflict();
        var returnCallbackStandalone = function( obj ){
            alert( 'Standalone Returns: ' + obj );
        };
        var returnCallbackJQ = function( obj ){
            alert( 'JQ Loader Plugin Returns: ' + obj );
        };
        _js.load( './test.js', { bb: 123 }, { bb:456 }, returnCallbackStandalone );
        $.loadSubScript( './test.js', { bb: 123 }, { bb:456 }, returnCallbackJQ );
    
    }catch(e){ alert(e); }
})();