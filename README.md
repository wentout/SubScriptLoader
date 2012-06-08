SubScriptLoader
===============

subscript loader with Scope interceptor

jquery.create.0.1.js -- jQuery subscript loader plugin.
create.0.1.js -- standalone script with same direction, depends of $.ajax.

API for both, _create.load or $.loadSubscript:
( url, scope, thisName, returnCallback )

where:
    url -- URL of script to load
    scope -- which object will become scope of loaded script, default is window
    thisName -- which oblect will become 'this' for loaded script, default is window too
        You could just to specify true if You wish scope and this become same object
    returnCallback -- if loaded script returns something, You could intercept this

Warning! 
If You are developing in local files, You need to use Firefox or IE, or, maybe Safari.
For Google Chrome loader works only through internet server, it can't work with file:/// protocol, 
because of some restrictions policy (especially in Google Chrome and Opera).
For exatly Chrome You could try to swich this behavior off with running Chrome from shell with 
--allow-file-access-from-files option ( or use stackoverflow to find correct option ).
