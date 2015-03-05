'use strict';

var app = require( '../appModule.js' );
require( '../common/notesStorage.js' );

app.controller( 'main', class mainController{

    constructor ($scope, notesStorage){

        var self = this;

        this.notesStorage = notesStorage;
        this.notes = [];
        this.note = {};

        // TODO: refactor: awfull all $digest call
        $scope.$watch( ()=> notesStorage.all , ()=>{
            self.notes = notesStorage.all;
        }, true );


        // help functions
        Object.defineProperty(this, 'overwriting', { 
            get : function(){
                return notesStorage.contains( self.note.name );
            } 
        });

        Object.defineProperty(this, 'isnew', { 
            get : function(){             
                return !!self.note.name && !(notesStorage.contains( self.note.name ));
            } 
        });
    }

    create ( ){
        this.note.name = '';
        this.note.text = '';
    }

    save ( ) {
        this.notesStorage.set( this.note.name || '[no title]', this.note.text || '' );
    }

    open ( anote ) {
        this.note.name = anote.name;
        this.note.text = anote.text;
    }

    remove ( anote ) {
        this.notesStorage.remove( anote.name );
    }

} );

