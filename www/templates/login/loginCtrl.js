define(['angular','layui'],function (angular,layui) {
  'use strict';
  return ['$scope', '$state', 'httpServices', function ($scope, $state, httpServices) {
    var element = layui.element,
      form = layui.form;
    $scope.login = {
      name: '',
      pwd: '',
      switch: true,
      isLogin: true,
     loginBtn:function(){
       httpServices.getlist('api/users/login','POST',{username:this.name,password:this.pwd}).then(function(res){
          console.log(res)
          if(res.status===1){
            $state.go('tab.home');
          }
       })
     }
    };
   
    element.render();
    form.render();
  }]

});
