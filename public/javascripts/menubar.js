/**
 * Created by Janusz on 11.08.2016.
 */
(function() {
    'use strict';
    angular.module('navBarDemoBasicUsage', ['ngMaterial'])
        .controller('AppCtrl', AppCtrl);
    function AppCtrl($scope) {
        $scope.currentNavItem = 'page1';
    }
})();