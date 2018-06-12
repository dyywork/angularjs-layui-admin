define(['angular', 'layui'], function (angular, layui) {
  'use strict'

  return ['$state', '$timeout', function ($state, $timeout) {
    return {
      restrict: 'A',

      require: '?ngModel',
      scope: {
        ngModel: '='
      },
      link: function (scope, element, attrs, ngModel) {

        var laydate = layui.laydate;
        laydate.render({
          elem: element[0]
          , range: '~'
          , done: function (value) {
            element[0].value = value;
            scope.$apply(setViewValue);
          }
        });
        element.on('click', function () {

          laydate.render({
            elem: element[0]
            , range: '~'
            , done: function (value) {
              element[0].value = value;
              scope.$apply(setViewValue);
            }
          });
        });
        // 模型值同步到视图上
        ngModel.$render = function () {
          element.val(ngModel.$viewValue || '');
        };

        // 监听元素上的事件
        element.on('blur keyup change', function () {
          scope.$apply(setViewValue);
        });

        setViewValue();

        // 更新模型上的视图值
        function setViewValue() {
          var val = element.val();
          ngModel.$setViewValue(val);
        }
      }
    }
  }]
})
