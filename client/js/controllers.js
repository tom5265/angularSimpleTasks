var controllers = angular.module('myApp.controllers', []);

controllers.controller('TaskController', ['$scope', function($scope) {
    $scope.ping = function() {
        alert('You shall not pass!');
    }

    $scope.texter = function() {
        alert($scope.msg);
    }
    $scope.randomColor = function() {
        var numerals = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += numerals[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    $scope.spanner = function() {
        var newSpan = angular.element('<span> Tom Moore </span>');
        newSpan.appendTo('#spanDiv');
    }
    
    $scope.addFriend = function () {
       for (var i = 0; i < friends.length; i++) {
            var frand = angular.element('<li>' + friends[i] + '</li>');
            frand.appendTo('#friends');
        }
    }
    
    var friends = ['Mike', 'Carter', 'Jimbo', 'Will', 'Justin', 'Kevin', 'Charlie', 'Lee', 'Ian', 'George'];
}]);

