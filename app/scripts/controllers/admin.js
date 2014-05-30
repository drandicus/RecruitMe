'use strict';

angular.module('interviewerApp')
    .controller('AdminCtrl', ['$scope', '$firebase', '$location', '$rootScope', function ($scope, $firebase, $location, $rootScope) {

        $scope.session = {};

        var coreRef = new Firebase('https://interviewer.firebaseio.com/');
        $scope.list = $firebase(coreRef);

        $scope.submit = function () {
            $scope.list.$add($scope.session);
        }

    }]);
