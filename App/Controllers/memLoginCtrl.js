/// <reference path="../app.js" />
ores.controller("memLoginCtrl", ["$scope", "$location", "loginService", "localStorageService", "ShareService", function ($scope, $location, loginService,localStorageService, ShareService) {
    $scope.message = "";
    $scope.fnGoToPage = function (args) {
        $location.path('/' + args);
    }

    $scope.setUserType = function () {
        ShareService.getUserType("M");
        localStorageService.set('utype', "M");
    };

    $scope.memberLogin = function (ldata) {
        debugger;
        $scope.loginData = ldata;
        $scope.loginData.userType = "M";
        loginService.memlogin($scope.loginData).then(function (res) {
            if (res !== "error" || res!=="") {
                $location.path('/memprofile');
            }
            else {
                $scope.message = "login failed";
            }
        });
    };
    $scope.setUserType();
}])