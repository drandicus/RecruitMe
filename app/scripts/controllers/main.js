'use strict';

angular.module('interviewerApp')
    .controller('MainCtrl', ['$scope', '$rootScope', '$location', function ($scope, $rootScope, $location) {

        //Used to see if a user is logged in
        $scope.loggedIn = function() {
            return $rootScope.auth.loggedIn;
        }
        $scope.login = function () {
            $rootScope.auth.loggedIn = true;
            $location.path('/sessions');

        }

        $scope.logout = function() {
            $rootScope.auth.loggedIn = false;
        }

        $scope.register = function() {

        }
    }]);
