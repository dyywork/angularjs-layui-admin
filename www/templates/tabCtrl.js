define(['layui'],function (layui) {
  'use strict';

  return ['$scope', '$state', 'httpServices', 'tabsDataService', 'infoService','$rootScope', function ($scope, $state, httpServices, tabsDataService, infoService,$rootScope) {
    /*var element = layui.element,
      form = layui.form;*/


  /*  httpServices.getlist('../../json/treeJson.json', 'GET').then(function (res) {
      $scope.treeData = res;
    });*/

    var tabs = infoService.getSession('tabNav');
    if (tabs &&tabs.length && tabs.length > 1) {
      $rootScope.tabsData = tabs;

    } else {
      $rootScope.tabsData = tabsDataService.all();
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
