ores.controller("memProfileViewCtrl", ["$scope", "$http", "$location", "mobileCheck", "memProfileViewService", function ($scope, $http, $location, memProfileViewService,mobileCheck) {
    if (mobileCheck) {
        angular.element(document.querySelector("#about-tabs")).removeClass("all_pad");
        angular.element(document.querySelector("#about-tabs")).addClass("all_pad1");
    }
    //$scope.fnGoToPage = function (args) {
    //    $location.path('/' + args);
    //}
    $scope.memID = "";
    $scope.GetMemberShipAllData = function () {
        memProfileViewService.memProfileView($scope.memID).then(function (data) {

        }
    };
}])