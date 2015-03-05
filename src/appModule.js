'use strict';

// var angular = require( 'angular' );
// require('angular-ui-router');
require('./common/common.js');

module.exports = angular.module('app', [ 'ui.router', 'common', 'templates' ])
.config( function( $stateProvider ){

    $stateProvider
    .state('home', {
        url: '',
        templateUrl: 'components/main.html',
        controller: 'main as main'
    })
    .state('home.item', {
        url: '/{id}',
        templateUrl: 'components/item.html',
        controller: 'itemView as item'
    });

} );

