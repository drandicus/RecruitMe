'use strict';

angular.module('interviewerApp')
    .directive('header', function () {
        return {
            templateUrl: '/views/header.html',
            restrict: 'AE',
            link: function postLink(scope, element, attrs) {

            }
        };
    });
