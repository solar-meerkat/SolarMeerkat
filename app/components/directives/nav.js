//Get current date
SolarMeerkat.directive("navBar", function(){
    return {
        restrict: "E",
        template: '<div class="data_time"> <button class="menu_control">Menu</button> <button ng-click="un_login()" class="menu_control">Exit</button><p class="dateNow"> <label> {{hours_only}} </label> : <label> {{seconds_only}} </label> </p> <p> </p> </div> <div id="app_nav">'+
        '<menu class="menu_nav"> <div class="header"> <div class="left"> <img ng-click="startLocalMessage()" src="../components/images/user.jpg"> <p class="user_name"> User User </p>'+
        '</div> <ul class="ul"> <li> <a class="brand_nav_text slide_click">My History</a> </li> <li>'+
        '<a href="#">Locations</a> </li> <li> <a href="#devices"> Devices </a> </li> <li> <a href="#reports"> Consumption Reports </a> </li>' +
        '</ul> <ul class="ul"> <li class="slide_box"> <a href="#planing_reports"> My Planning Reports </a> </li> <li> <a href="#people_expirience">' +
        'People Experience </a> </li> <li> <a href="https://threejs.org/examples/canvas_geometry_earth.html"> Locations </a> </li> <li> <a href="#help_and_support">' +
        'Help & Support </a> </li> </ul> </div> </menu></div>'
    }
});