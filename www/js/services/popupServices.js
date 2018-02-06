define(['angular'],function (angular) {
  'use strict';

  return ['$state',function ($state) {
    var layer = layui.layer;
    return {
      alert: function (data, callback, key) {
        /*
        * icon ,0:警告,1,6:成功，2,5:失败，3：疑问，4：锁
        * */
        layer.alert(data, {
          icon: 6,
          skin: 'layui-layer-molv' //样式类名
          ,title:'提示'
          ,closeBtn: 0,
          shadeClose:true
        }, function(index){
          if (typeof (callback) === "function") {
            callback();
          }else{
            layer.close(index)
          }
        });
      }
    }
  }]


  /*var popup = function ($ionicPopup) {
    return {
      alert: function (data, callback, key) {
        $ionicPopup.alert({
          title: '提示',
          template: "<div style='text-align: center;font-size: 1.2rem'>" + data + "</div>",
          okText: "确定",
          okType: "button-orgine dyy-border-rad"
        }).then(function (data) {
          if (typeof (callback) === "function") {
            callback();
          }
        })
      }
    }
  }

  popup.$inject = ['$ionicPopup']
  return popup;*/

})
