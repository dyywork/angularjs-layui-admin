define(function () {
  'use strict';


  return ['$scope', '$state', 'httpServices', '$ionicPopup', function ($scope, $state, httpServices, $ionicPopup) {
    var element = layui.element,
      form = layui.form;

    element.render();
    form.render();

    $scope.goDash = function () {
      $state.go('tab.home')
    }
  }]

})
