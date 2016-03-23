var controllers = angular.module('myApp.controllers', []);

controllers.controller('TaskController', ['$scope', function($scope) {
    $scope.ping = function () {
        alert('You shall not pass!');
    }
    
    $scope.texter = function () {
        alert($scope.msg);
    }
}]);