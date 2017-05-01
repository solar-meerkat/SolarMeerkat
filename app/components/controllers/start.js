/* Start */

SolarMeerkat.controller("StartCtrl", function($scope){
    $scope.users = [null];
    $scope.User = {
        user_avatar: "",
        user_name: "",
        user_password: "",
        user_email: "example@email.com",
        registerStatus: false
    };
    $scope.checkUserData = function(){
        $scope.users.push($scope.User.user_name, $scope.User.user_password);
        if ($scope.User.user_password === "1234") {
            alert("Welcome!");
            $scope.User.registerStatus = true;
            window.location.assign("/#/dashboard");
        } else {
           alert("Sorry, enter normal password! ");
        }
    }
});

function changeBackground2 (){
    document.getElementById('start').style.backgroundImage = "url('components/images/cosmic2.jpg')";
}

setTimeout(changeBackground2, 6000);