define(function () {
  'use strict';

  return ['$scope', '$state', 'httpServices', 'tabsDataService', 'infoService', function ($scope, $state, httpServices, tabsDataService, infoService) {
    var element = layui.element,
      form = layui.form;


    httpServices.getlist('../../json/treeJson.json', 'GET').then(function (res) {
      $scope.treeData = res;
    });

    var tabs = infoService.getSession('tabNav');
    if (tabs &&tabs.length && tabs.length > 1) {
      $scope.tabsData = tabs;
    } else {
      $scope.tabsData = tabsDataService.all();
    }
    $scope.isOk = false;
    $scope.slideSwitch = function () {
      if ($scope.isOk){
        $scope.isOk = false;
      }else {
        $scope.isOk = true;
      }

    }

  }]


});
