define(function () {
  'use strict';

  var IosSelect = require('IosSelect');

  return ['$scope', function ($scope) {
    var layer = layui.layer
      , form = layui.form,
      element = layui.element;

    form.render()
    element.on('nav(demo)', function(elem){
      //console.log(elem)
      layer.msg(elem.text());
    });

  }];
});
