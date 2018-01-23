
define(function () {
  'use strict';


  return ['$scope', '$state', 'httpServices', function ($scope, $state, httpServices) {
    var element = layui.element,
      form = layui.form;

    element.render();
    form.render();

    $scope.goDash = function () {
      $state.go('tab.home')
    }
  }]

})
