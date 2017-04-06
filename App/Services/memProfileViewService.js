/// <reference path="../app.js" />
ores.factory("memProfileViewService", ["$http", "$q", "baseService", function ($http, $q, baseService) {

    var memProfileViewFactory = {};

    var _memProfileView = function (memID) {
        debugger;
        var deffer = $q.defer();
        $http.get(baseService + 'api/MemProfileView/'+ memID).success(function (data, status) {
            deffer.resolve(data, status);
        }).error(function (result, status) {
            deffer.reject(result);
        });
        return deffer.promise;
    };
    memProfileViewFactory.memProfileView = _memProfileView;
    return memProfileViewFactory;

}]);