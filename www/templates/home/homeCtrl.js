define(function () {
  'use strict';

  var IosSelect = require('IosSelect');

  return ['$scope', '$state', 'loadingService', 'PopupService','infoService','tabsDataService','$rootScope', function ($scope, $state, loadingService, PopupService,infoService,tabsDataService,$rootScope) {
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
      PopupService.alert('成功', function () {
        layer.closeAll()
      })
    }

    $scope.addTabs = function () {
      var tabData = tabsDataService.all();

      tabsDataService.add(tabData,{
        "parentId":2,
        "subId":0,
        "title":"弹出层",
        "baseUrl":"tab.layer",
        "show":false
      })
      $rootScope.tabsData = infoService.getSession('tabNav');
      element.render()
    }
    form.render()


  }];
});
