/**
 * @author 丁永亚
 * @date 2018/1/19
 * @Description:侧边栏公用指令
 */
define(['angular'], function (angular) {
  'use strict';

  return ['httpServices', 'tabsDataService', 'infoService', function ( httpServices, tabsDataService, infoService) {
    return {
      restrict: 'AEMC',
      replace: true,
      templateUrl: 'js/directives/common/slide.html',
      link: function (scope, element, attrs) {
        var elements = layui.element,
          form = layui.form;

        scope.treeData = JSON.parse(attrs.data);
        elements.render();
        form.render();
        scope.goTree = function (res) {
          for (var i = 0; i < scope.treeData.length; i++) {
            if (res.parentId === scope.treeData[i].id) {
              for (var j = 0; j < scope.treeData[i].childTree.length; j++) {
                if (res.subId === scope.treeData[i].childTree[j].subId) {
                  scope.treeData[i].childTree[j].show = true;
                } else {
                  scope.treeData[i].childTree[j].show = false;
                }
              }
            }
          }
          tabsDataService.add(scope.tabsData, res);
        };
      }
    }
  }]

})
