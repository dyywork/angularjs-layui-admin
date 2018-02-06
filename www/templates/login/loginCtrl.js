
define(function () {
  'use strict';


  return ['$scope', '$state', 'httpServices', function ($scope, $state, httpServices) {
    var element = layui.element,
      form = layui.form;

    element.render();
    form.render();
    $scope.login={
      name:'',
      age:'',
      switch:true,
      value:true
    }

    $scope.goDash = function (name,age) {
      $state.go('tab.home')
    }
  }]

})
