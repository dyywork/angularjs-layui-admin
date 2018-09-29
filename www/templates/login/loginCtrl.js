
define(function () {
  'use strict';
  return ['$scope', '$state', 'httpServices',
    function ($scope, $state, httpServices) {
    var element = layui.element,
      form = layui.form;

    element.render();
    form.render();
    $scope.login={
      name:'',
      age:'',
      switch:true,
      value:true,
      init: function () {
        var config = {
          vx: 4,//点x轴速度,正为右，负为左
          vy:  4,//点y轴速度
          height: 2,//点高宽，其实为正方形，所以不宜太大
          width: 2,
          count: 100,//点个数
          color: "121, 162, 185",//点颜色
          stroke: "130,255,255",//线条颜色
          dist: 6000,//点吸附距离
          e_dist: 20000,//鼠标吸附加速距离
          max_conn: 10//点到点最大连接数
        }
        //调用
        CanvasParticle(config);
      },
      goDash: function () {
        $state.go('tab.home')
      },
      keyUp: function (e) {
        console.log(e)
        var _this = this;
      }
    }
    $scope.keyUp = function(e){
      console.log(e)
    }
    $scope.login.init();
  }]

})
