'use strict';

angular.module('interviewerApp')
    .controller('AddCtrl', function ($scope, $routeParams, $firebase) {
        $scope.key = $routeParams.key;

        var coreRef = new Firebase('https://interviewer.firebaseio.com/');
        $scope.list = $firebase(coreRef);

        $scope.session = $scope.list.$child($scope.key);


        $scope.addMod = function () {

            if (typeof $scope.session.mods === 'undefined') {
                $scope.session.mods = [];
            }

            $scope.session.mods.push({});
        }

        $scope.addApplicant = function() {

            if (typeof $scope.session.applicants === 'undefined'){
                $scope.session.applicants = [];
            }

            $scope.session.applicants.push({});
        }

        $scope.addRestriction = function(index) {
            console.log($scope.session.applicants.length);
            if ($scope.session.applicants.length === 0) {
                return;
            }

            var applicant = $scope.session.applicants[index];
            console.log(applicant);

            if (typeof $scope.session.applicants[index].restrictions === 'undefined') {
                $scope.session.applicants[index].restrictions = [];
            }

            $scope.session.applicants[index].restrictions.push({});
        }

        $scope.saveMods = function () {
            $scope.session.$update({mods: $scope.session.mods})
        }

        $scope.saveApplicants = function() {
            $scope.session.$update({applicants: $scope.session.applicants});
        }

    });
