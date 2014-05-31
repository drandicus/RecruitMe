'use strict';

angular
    .module('interviewerApp', [
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngRoute',
        'firebase'
    ])
    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                authenticated: false
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl',
                authenticated: false
            })
            .when('/sessions', {
                templateUrl: 'views/admin.html',
                controller: 'AdminCtrl',
                authenticated: true
            })
            .when('/dashboard/:key', {
                templateUrl: 'views/add.html',
                controller: 'AddCtrl',
                authenticated: true
            })
            .otherwise({
                redirectTo: '/'
            });

    }])
    .run(['$rootScope', '$location' , function($rootScope, $location){

        $rootScope.auth = {
            loggedIn:false
        }

        $rootScope.$on("$routeChangeStart", function (evt, next, current) {
            if (next.authenticated && !$rootScope.auth.loggedIn) {
                $location.path('/');
                alert('Restricted Webpage, Please Log in');
            }
        });
    }]);
