'use strict';

var SolarMeerkat = angular.module('SolarMeerkat', ['ngRoute']);

SolarMeerkat.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $routeProvider.otherwise({redirectTo: '/start'})
      .when("/start", {
          templateUrl: "views/main.html",
          controller: "StartCtrl"
      })
      .when("/dashboard", {
          templateUrl: "views/dashboard.html",
          controller: "DashboardCtrl"
      })
      .when("/planing_reports", {
          templateUrl: "views/planing-reports.html",
          controller: "PlaningReportsCtrl"
      })
      .when("/settings", {
          templateUrl: "views/settings.html",
          controller: "SettingsCtrl"
      })
      .when("/help_and_support", {
          templateUrl: "views/help-and-support.html",
          controller: "HelpSupportCtrl"
      })
      .when("/locations", {
          templateUrl: "views/earth-view.html",
          controller: "LocationsCtrl"
      })
}]);

$(document).ready(function(){
    $('.menu_control').click(function(){
        $('#app_nav').toggle("slow");
    })
});
