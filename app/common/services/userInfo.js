angular.module('slurbApp').service('userInfo', function ($q) {

    return {
        send: function (userInfo) {

            // this is a fake transaction promise for stubbing calls

            var deferred = $q.defer();
            deferred.resolve(userInfo);

            return deferred.promise;
        }
    };

});


