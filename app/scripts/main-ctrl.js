angular.module( 'app' )
.controller( 'main', [ '$scope', 'notesStorage', function( $scope, notesStorage ){
    'use strict';

    var notes = [];
    $scope.$watch( function(){ return notesStorage.keys; }, function(){
        $scope.notes = notes = notesStorage.keys;
    }, true );

    var note = $scope.note = {};

    Object.defineProperty(this, 'overwriting', { 
        get : function(){
            return note.name in notes;
        } 
    });

    this.create = function( ){
        note.name = '';
        note.text = '';
    };

    this.save = function( ){
        notesStorage.set( note.name || '[no title]', note.text || '' );
    };

    this.open = function( name ){
        note.name = name;
        note.text = notesStorage.get( name );
    };

    this.remove = function( name ){
        notesStorage.remove( name );
    };


} ] )

