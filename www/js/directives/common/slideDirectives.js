/**
 * @author 丁永亚
 * @date 2018/1/19
 * @Description:侧边栏公用指令
 */
define(['angular','layui'], function (angular,layui) {
  'use strict';

  return ['httpServices', 'tabsDataService', 'infoService','$timeout', function ( httpServices, tabsDataService, infoService,$timeout) {
    return {
      restrict: 'AEMC',
      replace: true,
      templateUrl: 'js/directives/common/slide.html',
      link: function (scope, element, attrs) {
        var elements = layui.element,
          form = layui.form;
         
         // console.log(scope.treeDatas)
          httpServices.getlist('api/slides', 'GET').then(function (res) {
            if(res.status===1){
              scope.treeData = res.data;
              $timeout(function(){
                elements.render();
                form.render();
              },100)
  
            }
          });
    
        scope.goTree = function (res) {
          elements.render();
          for (var i = 0; i < scope.treeData.length; i++) {
            if (res.parentId === scope.treeData[i].id) {
              for (var j = 0; j < scope.treeData[i].childtrees.length; j++) {
                if (res.subId === scope.treeData[i].childtrees[j].subId) {
                  scope.treeData[i].childtrees[j].show = true;
                } else {
                  scope.treeData[i].childtrees[j].show = false;
                }
              }
            } else {

            }
          }
          tabsDataService.add(scope.tabsData, res);

        };


      }
    }
  }]

})
