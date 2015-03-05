'use strict';

var app = require( '../appModule.js' );
require( '../common/notesStorage.js' );
var Note = require( './Note.js' );

app.controller( 'main', class MainController{

    constructor ($scope, $state, notesStorage){

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
        this.$state.go( 'home.item', { id: note.name } );
    }

} );

