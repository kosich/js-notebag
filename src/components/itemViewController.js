'use strict';

var app = require( '../appModule.js' );
require( '../common/notesStorage.js' );
var Note = require( './Note.js' );

app.controller( 'itemView', class ItemView{

    constructor ( $stateParams, notesStorage ){

        let noteName = $stateParams.id;
        this.notesStorage = notesStorage;

        console.log( 'trying to open ', noteName );

        this.note = new Note(noteName, notesStorage.get( noteName ));
    }

    reset ( ){
        this.note = new Note();
    }

    save ( ) {
        console.log( 'trying to save ', this.note.name );
        this.notesStorage.set( this.note.name || '[no title]', this.note.text || '' );
    }

    get overwriting (){
        // TODO: this is being called on every $digest
        return this.notesStorage.contains( this.note.name );
    } 

    get isnew (){
        // TODO: this is being called on every $digest
        return !!this.note.name && !(this.notesStorage.contains( this.note.name ));
    } 

} );

