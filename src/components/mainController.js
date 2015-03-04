var app = require( '../appModule.js' );
require( '../common/notesStorage.js' );

app.controller( 'main', function ( $scope, notesStorage ) {
    'use strict';

    // console.log('Ellow');

    var notes = [];

    // TODO: refactor: awfull all $digest call
    $scope.$watch( ()=> notesStorage.all , ()=>{
        $scope.notes = notes = notesStorage.all;
    }, true );

    var note = $scope.note = {};

    // help functions
    Object.defineProperty(this, 'overwriting', { 
        get : function(){
            return notesStorage.contains( note.name );
        } 
    });

    Object.defineProperty(this, 'isnew', { 
        get : function(){             
            return !!note.name && !(notesStorage.contains( note.name ));
        } 
    });

    this.create = ( )=>{
        note.name = '';
        note.text = '';
    };

    this.save = function( ){
        notesStorage.set( note.name || '[no title]', note.text || '' );
    };

    this.open = ( anote ) => {
        console.log( 'opened', anote );
        note.name = anote.name;
        note.text = anote.text;
    };

    this.remove = function( anote ){
        notesStorage.remove( anote.name );
    };

} );

