angular.module( 'app' )
.controller( 'main', [ '$scope', 'notesStorage', function( $scope, notesStorage ){
    'use strict';

    $scope.$watch( function(){ return notesStorage.keys; }, function(){
        $scope.files = notesStorage.keys;
    }, true );

    this.save = function( ){
        console.log( $scope.name, $scope.text );
        notesStorage.set( $scope.name, $scope.text );
    };

    this.open = function( name ){
        $scope.name = name;
        $scope.text = notesStorage.get( name );
    };

    this.remove = function( name ){
        notesStorage.remove( name );
    };


} ] )

