
angular.module( 'help', [ 'ui.router' ] )
.config( function( $stateProvider ){

    console.log( 'some' );

    $stateProvider
    .state('help', {
        url: 'help',
        templateUrl: 'help/help.html'
    })
    .state( 'help.me', {
        url: 'me',
        templateUrl: 'help/me.html'
    } );

} );

