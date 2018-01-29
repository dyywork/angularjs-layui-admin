
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
      switch:true
    }


    $scope.goDash = function (name,age) {

      httpServices.getlist('users/addUser?name='+ name +'&age='+age,'GET').then(function (res) {
        console.log(res)
      })

      $state.go('tab.home')
    }
  }]

})
