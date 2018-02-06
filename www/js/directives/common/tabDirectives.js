/**
 * @author 丁永亚
 * @date 2018/1/19
 * @Description:tabs公用指令
 */
define(['angular'], function (angular) {
  'use strict';

  return ['httpServices', 'tabsDataService', 'infoService','$rootScope', function (httpServices, tabsDataService, infoService,$rootScope) {
    return {
      restrict: 'AEMC',
      replace: true,
      templateUrl: 'js/directives/common/tab.html',
      link: function (scope, element, attrs) {
        var elements = layui.element,
          form = layui.form;

        elements.render();
        form.render();
        $rootScope.tabsData = JSON.parse(attrs.data);

        scope.goTabs = function (res) {
          for (var i = 0; i < scope.treeData.length; i++) {
            if (res.parentId === scope.treeData[i].id) {
              for (var j = 0; j < scope.treeData[i].childTree.length; j++) {
                if (res.subId === scope.treeData[i].childTree[j].subId) {
                  scope.treeData[i].childTree[j].show = true;
                  scope.treeData[i].parentShow = true;
                } else {
                  scope.treeData[i].childTree[j].show = false;
                }
              }
            } else {
              scope.treeData[i].parentShow = false;
            }
          }
          tabsDataService.switchTab(res);
          $rootScope.tabsData = infoService.getSession('tabNav')
        };

        scope.goRemoveTabs = function (res) {
          tabsDataService.getRemove(res);
          $rootScope.tabsData = infoService.getSession('tabNav');
          for (var a = 0; a < scope.tabsData.length; a++) {
            if (scope.tabsData[a].show) {
              for (var i = 0; i < scope.treeData.length; i++) {
                if (scope.treeData[i].id === scope.tabsData[a].parentId) {
                  scope.treeData[i].parentShow = true;
                  for (var j = 0; j < scope.treeData[i].childTree.length; j++) {
                    if (scope.treeData[i].childTree[j].subId === scope.tabsData[a].subId) {
                      scope.treeData[i].childTree[j].show = true;
                    } else {
                      scope.treeData[i].childTree[j].show = false;
                    }
                  }
                } else {
                  scope.treeData[i].parentShow = false;
                }
              }
            }
          }
        };


      }
    }
  }]

})
