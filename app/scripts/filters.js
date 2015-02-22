angular.module( 'app' )
.filter( 'shorten', function(  ){
    'use strict';

    var CUT_LEN = 30;

    return function( text ){
        if ( !text || text.length < CUT_LEN )
            return text;

        return text.slice( 0, CUT_LEN ) + '...';
    };

} );

