define(function () {
  'use strict';

  var IosSelect = require('IosSelect');

  return ['$scope', function ($scope) {
    var layer = layui.layer
      , form = layui.form,
      element = layui.element;
element.render();
    form.render();
//监听折叠
    element.on('collapse(test)', function(data){
      layer.msg('展开状态：'+ data.show);
    });

  }];
});
