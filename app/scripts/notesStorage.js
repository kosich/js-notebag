angular.module( 'app' )
.service( 'notesStorage', [ '$window' , function( $window ){
    'use strict';

    var storage = $window.localStorage;

    return {
        get all (){
            return Object.keys(storage).map( function( name ){
                return {
                    name : name,
                    text : storage[ name ]
                };
            } );
        },
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
        },
        contains : function( name ){
            return name in storage;
        }
    };

}] );
