'use strict';

var angular = require( 'angular' );
require('angular-ui-router');
require('./common/common.js');

module.exports = angular.module('app', [ 'ui.router', 'common' ])
.config( function( $stateProvider ){

    $stateProvider
    .state('home', {
        url: '/some',
        templateUrl: 'components/main.html',
        controller: 'main as main'
    });

} );

