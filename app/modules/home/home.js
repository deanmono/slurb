'use strict';

angular.module('slurbApp.home', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'app/modules/home/home.html',
            controller: 'HomeCtrl'
        });
    }])

    .controller('HomeCtrl', [
        '$scope',
        '$location',
        'orderTransaction',
        function($scope, $location, orderTransaction) {

            $scope.quantity = 1;
            $scope.total = 2.95;

            $scope.order = {
                add: function () {
                    if ($scope.quantity === 9) {
                        return 9
                    }

                    $scope.quantity = $scope.quantity + 1;
                },
                remove: function () {
                    if ($scope.quantity === 1) {
                        return 1
                    }

                    $scope.quantity = $scope.quantity - 1;
                }
            }

            $scope.orderInit = function () {
                orderTransaction.total = $scope.total;
                orderTransaction.quantity = $scope.quantity;
                $location.path('/order');
            }

        }]
    );
