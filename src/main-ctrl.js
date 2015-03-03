angular.module( 'app' )
.controller( 'main', [ '$scope', 'notesStorage', function( $scope, notesStorage ){
    'use strict';

    var notes = [];
    $scope.$watch( function(){ return notesStorage.all; }, function(){
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

    this.create = function( ){
        note.name = '';
        note.text = '';
    };

    this.save = function( ){
        notesStorage.set( note.name || '[no title]', note.text || '' );
    };

    this.open = function( anote ){
        console.log( anote );
        note.name = anote.name;
        note.text = anote.text;
    };

    this.remove = function( anote ){
        notesStorage.remove( anote.name );
    };


} ] )

