'use strict';

// var angular = require( 'angular' );
// require('angular-ui-router');
require('./common/common.js');
require('./help/helpModule.js');

module.exports = angular.module('app', [ 'ui.router', 'help', 'common', 'templates' ])
.config( function( $stateProvider ){

    $stateProvider
    .state('home', {
        url: '',
        abstract: true,
        templateUrl: 'components/main.html',
        controller: 'main as main'
    })
    .state('home.main', {
        url: '{id}',
        views: {
            'item' : {
                templateUrl: 'components/item.html',
                controller: 'item as item'
            },
            'list' : {
                templateUrl: 'components/list.html',
                controller: 'list as list'
            }
        }
    });

} );

