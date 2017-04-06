/// <reference path="../app.js" />
ores.factory("memProfileViewService", ["$http", "$q", "baseService", function ($http, $q, baseService) {

    var memProfileViewFactory = {};

    var _memProfileView = function (memID) {
        var deffer = $q.defer();
        $http.get(baseService + 'api/memProfileView/', memID, {
            headers: { 'Content-Type': 'application/json;charset=utf-8' }
        }).success(function (data, status) {
            deffer.resolve(data, status);
        }).error(function (result, status) {
            deffer.reject(result);
        });
        return deffer.promise;
    };
    memProfileViewFactory.memProfileView = __memProfileView;
    return devSignupFactory;

}]);