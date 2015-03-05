'use strict';

var app = require( '../appModule.js' );
require( '../common/notesStorage.js' );
var Note = require( './Note.js' );

app.controller( 'list', class ListController{

    constructor ($scope, $state, notesStorage){

        console.log('list controller init');

        var self = this;

        // saving providers
        this.$state = $state;
        this.notesStorage = notesStorage;

        this.notes = [];

        // TODO: refactor: awfull all $digest call
        $scope.$watch( ()=> notesStorage.all , ()=>{
            self.notes = notesStorage.all;
        }, true );

    }

    remove ( note ) {
        this.notesStorage.remove( note.name );
    }

    routeTo ( note ){
        console.log( 'routing to ', note.name )
        this.$state.go( 'home.main', { id: note.name } );
    }


} );

