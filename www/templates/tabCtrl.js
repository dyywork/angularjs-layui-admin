define(['layui'],function (layui) {
  'use strict';

  return ['$scope', '$state', 'httpServices', 'tabsDataService', 'infoService','$rootScope',
    function ($scope, $state, httpServices, tabsDataService, infoService,$rootScope) {

    $scope.ng={
      isOk: false,
      tabs: infoService.getSession('tabNav'),
      init: function () {
        var _this = this;
        if (_this.tabs && _this.tabs.length && _this.tabs.length > 1) {
          $rootScope.tabsData = _this.tabs;
        } else {
          $rootScope.tabsData = tabsDataService.all();
        }
      },
      slideSwitch: function () {
        var _this = this;
        if (_this.isOk){
          _this.isOk = false;
        }else {
          _this.isOk = true;
        }
      },
      goOut: function () {
        $state.go('login')
      }
    }
    $scope.ng.init()

  }]


});
