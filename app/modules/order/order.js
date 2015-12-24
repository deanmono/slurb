'use strict';

angular.module('slurbApp.order', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/order/:orderState', {
            templateUrl: 'app/modules/order/order.html',
            controller: 'OrderCtrl'
        })
            .when('/order/', {
                redirectTo: '/order/shipping',
                templateUrl: 'app/modules/order/order.html',
                controller: 'OrderCtrl'
            })
    }])

    .controller('OrderCtrl', [
        '$scope',
        '$routeParams',
        'orderTransaction',
        '$location',
        'userInfo',
        function($scope, $routeParams, orderTransaction, $location, userInfo) {

            $scope.orderState = $routeParams.orderState;
            $scope.orderTransaction = orderTransaction;
            $scope.userInfo = userInfo;
            $scope.orderConfirm = false;

            $scope.shippingSubmit = function () {

                $location.path('/order/payment');
            }

            $scope.paymentSubmit = function () {

                orderTransaction.send($scope.paymentInfo)
                    .then(function onSuccess(){
                        $location.path('/order/confirmation');
                        $scope.orderConfirm = true;
                    })
                    .catch(function onError(err){
                        console.log(err);
                    });
            }

            if ($location.path() === '/order/confirmation') {

                $scope.$on('$routeChangeStart', function () {
                    $location.path('/home');
                });
            }

        }]
    );

