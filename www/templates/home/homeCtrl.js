define(function () {
  'use strict';

  var IosSelect = require('IosSelect');

  return ['$scope', '$state', 'loadingService','PopupService', function ($scope, $state, loadingService,PopupService) {
    var layer = layui.layer
      , form = layui.form,
      element = layui.element;

    $scope.loading = function () {
      loadingService.show();
      setTimeout(function () {
        loadingService.hide()
      }, 2000);
    }
$scope.popup = function () {
  PopupService.alert('成功',function () {
    console.log(1)
    layer.closeAll()
  })
}

    form.render()


  }];
});
