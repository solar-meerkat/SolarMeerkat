/* Dashboard */

SolarMeerkat.controller("DashboardCtrl", function($scope, $http){
    $scope.date = new Date();
    $scope.hours_only = $scope.date.getHours();
    $scope.seconds_only = $scope.date.getSeconds();
    $scope.date.getMinutes();
    $scope.un_login = function(){
        window.location.assign("#/");
    };
    function setTimer () {
        $scope.seconds_only--;
    }
    setTimeout(setTimer, 1000);
    $scope.startLocalMessage = function(){
        if ($scope.hours_only < 11){
            new Noty({
                text: 'Great morning!'
            }).show();
        }
        else if ($scope.hours_only < 16){
            new Noty({
                text: 'Great day!'
            }).show();
        }
        else if ($scope.hours_only < 23){
            new Noty({
                text: 'Great evening!'
            }).show();
        }
    }
});