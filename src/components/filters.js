var app = require( '../appModule.js' );

app.filter( 'shorten', function(){
    'use strict';

    const CUT_LEN = 30;

    return ( text ) => {
        if ( !text || text.length < CUT_LEN )
            return text;

        return text.slice( 0, CUT_LEN ) + '...';
    };

} );

