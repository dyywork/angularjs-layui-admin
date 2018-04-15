define(['angular'], function (angular) {
  'use strict';

  return ['$state',function ($state) {

    var layer = layui.layer;
    return {
      show: function () {
        //layer.load(0,{shade:[0.3,'#999999'],time:2000});
        //layer.load(1,{shade:[0.3,'#999999'],time:2000});
        layer.load(2,{shade:[0.3,'#999999'],time:10000});
      },
      hide: function () {
        layer.closeAll('loading');
      }
    }
  }]

});
