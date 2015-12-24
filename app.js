'use strict';

// Declare app level module which depends on views, and components
angular.module('slurbApp', [
    'ngRoute',
    'ngAnimate',
    'slurbApp.home',
    'slurbApp.order'
]).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/home'});
    }]);
