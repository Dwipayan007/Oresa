ores.controller("memProfileViewCtrl", ["$scope", "$http", "$location", "mobileCheck", "memProfileViewService", "localStorageService", function ($scope, $http, $location, mobileCheck, memProfileViewService, localStorageService) {
    debugger;
    if (mobileCheck) {
        angular.element(document.querySelector("#about-tabs")).removeClass("all_pad");
        angular.element(document.querySelector("#about-tabs")).addClass("all_pad1");
    }
    //$scope.fnGoToPage = function (args) {
    //    $location.path('/' + args);
    //}
    $scope.profileData = [];
    $scope.Membership_ID = "";
    //$scope.getAllImage = function (memId) {

    //}
    $scope.GetMemberShipAllData = function () {
        var authData = localStorageService.get('authorizationData');
        if (authData)
            $scope.Membership_ID = authData.uid;
        memProfileViewService.memProfileView($scope.Membership_ID).then(function (data) {
            debugger;
            if (data) {
                $scope.profileData = data;
            }
        });
    };
    $scope.GetMemberShipAllData();

    $(document).ready(function () {
        $("#slider").slider({
            animate: true,
            value: 1,
            min: 0,
            max: 1000,
            step: 10,
            slide: function (event, ui) {
                update(1, ui.value); //changed
            }
        });

        $("#slider2").slider({
            animate: true,
            value: 0,
            min: 0,
            max: 500,
            step: 1,
            slide: function (event, ui) {
                update(2, ui.value); //changed
            }
        });

        //Added, set initial value.
        $("#amount").val(0);
        $("#duration").val(0);
        $("#amount-label").text(0);
        $("#duration-label").text(0);

        update();
    });

    //changed. now with parameter
    function update(slider, val) {
        //changed. Now, directly take value from ui.value. if not set (initial, will use current value.)
        var $amount = slider == 1 ? val : $("#amount").val();
        var $duration = slider == 2 ? val : $("#duration").val();

        /* commented
        $amount = $( "#slider" ).slider( "value" );
        $duration = $( "#slider2" ).slider( "value" );
         */

        $total = "$" + ($amount * $duration);
        $("#amount").val($amount);
        $("#amount-label").text($amount);
        $("#duration").val($duration);
        $("#duration-label").text($duration);
        $("#total").val($total);
        $("#total-label").text($total);

        $('#slider a').html('<label><span class="glyphicon glyphicon-chevron-left"></span> ' + $amount + ' <span class="glyphicon glyphicon-chevron-right"></span></label>');
        $('#slider2 a').html('<label><span class="glyphicon glyphicon-chevron-left"></span> ' + $duration + ' <span class="glyphicon glyphicon-chevron-right"></span></label>');
    }
}])