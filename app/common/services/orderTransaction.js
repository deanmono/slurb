angular.module('slurbApp').service('orderTransaction', function ($q) {

    return {
        send: function (paymentInfo) {

            // this is a fake transaction promise for stubbing calls

            var deferred = $q.defer();
            deferred.resolve(paymentInfo);

            return deferred.promise;
        }
    };

});

