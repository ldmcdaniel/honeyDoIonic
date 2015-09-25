angular.module('honeyDo.controllers', [])

  .controller('AppCtrl', function($scope, $ionicModal, $timeout, $http) {
    $scope.formData = {};

    $http.get('https://mighty-coast-6578.herokuapp.com/api/todos/')
      .success(function(data) {
        $scope.todos = data;
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });

    $scope.createTodo = function() {
      $http.post('https://mighty-coast-6578.herokuapp.com/api/todos/', $scope.formData)
        .success(function(data) {
          $scope.formData = {};
          $scope.todos = data;
        })
        .error(function(data) {
          console.log('Error: ' + data);
        });
    };

    $scope.deleteTodo = function(id) {
      $http.delete('https://mighty-coast-6578.herokuapp.com/api/todos/' + id)
        .success(function(data) {
          $scope.todos = data;
        })
        .error(function(data) {
          console.log('Error: ' + data);
        });
    };
  })
