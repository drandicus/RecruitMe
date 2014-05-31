'use strict';

angular.module('interviewerApp')
    .controller('MainCtrl', ['$scope', '$rootScope', '$location', '$http', function ($scope, $rootScope, $location, $http) {


        $scope.login = function () {

            //TODO: Find a way to get a particular User based on username, this is just silly and inefficient and a security leak
            $http({method: 'GET', url:'http://localhost:8080/api/users'}).
                success(function(data, status, headers, config){

                    console.log(data);
                    for(var i=0; i<data.length; i++){
                        if ($scope.userName === data[i].username){
                            if ($scope.password === data[i].password){
                                $rootScope.auth.loggedIn = true;
                                $location.path('/sessions');
                                $rootScope.user = data[i];
                            }
                        }
                    }

                    $scope.loginError = true;

                }).
                error(function(data, status, headers, config){

                })



        }

        $scope.logout = function() {
            $rootScope.auth.loggedIn = false;
        }

        $scope.register = function() {

        }
    }]);
