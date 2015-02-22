angular.module( 'app' )
.service( 'notesStorage', [ '$window' , function( $window ){
    'use strict';

    var storage = $window.localStorage;

    return {
        get keys (){ 
            return Object.keys(storage);
        },
        get : function( name ){
            return storage.getItem( name );
        },
        set : function( name, value ){
            return storage.setItem( name, value );
        },
        remove : function( name ){
            return $window.localStorage.removeItem( name );
        }
    };

}] );
