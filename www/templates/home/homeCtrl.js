define(['layui'], function (layui) {
  'use strict';

  var IosSelect = require('IosSelect');

  return ['$scope', '$state', 'loadingService', 'PopupService', 'infoService', 'tabsDataService', '$rootScope', 'httpServices',
    function ($scope, $state, loadingService, PopupService, infoService, tabsDataService, $rootScope, httpServices) {
      var layer = layui.layer,
        upload = layui.upload,
        table = layui.table,
        form = layui.form,
        laydate = layui.laydate;

      laydate.render();

      //日期范围
      laydate.render({
        elem: '#test6'
        , range: true
      });

      $scope.startDate = '';
      $scope.loading = function () {
        loadingService.show();
        setTimeout(function () {
          loadingService.hide()
        }, 2000);
      };
      $scope.popup = function () {
        PopupService.alert($scope.startDate, function () {
          layer.closeAll()
        })
      };

      $scope.addTabs = function () {
        var tabData = tabsDataService.all();

        tabsDataService.add(tabData, {
          "parentId": 2,
          "subId": 0,
          "title": "弹出层",
          "baseUrl": "tab.layer",
          "show": false
        });
        $rootScope.tabsData = infoService.getSession('tabNav');
        element.render()
      };
      form.render()


    }];
});
