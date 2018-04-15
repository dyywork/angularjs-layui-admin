define(['angular'], function (angular) {
  'use strict';
  var forEach = angular.forEach,
    extend = angular.extend,
    isDefined = angular.isDefined,
    isNumber = angular.isNumber,
    isString = angular.isString,
    jqLite = angular.element,
    noop = angular.noop;

  return ['$state', function ($state) {
    return {
      restrict: 'E',
      replace: true,
      require: '?ngModel',
      transclude: true,
      template: '<input type="checkbox" name="" lay-skin="switch">',
      compile: function (element, attr) {
        console.log(attr)
        console.log(element)
        var elementa = layui.element,
          form = layui.form;

        var input = element;
        if (input[0].checked){
          element.attr('checked')

          elementa.render();
          form.render();
        }
        console.log(input)
        forEach({
          'name': attr.name,
          'ng-value': attr.ngValue,
          'ng-model': attr.ngModel,
          'ng-checked': attr.ngChecked,
          'ng-disabled': attr.ngDisabled,
          'ng-true-value': attr.ngTrueValue,
          'ng-false-value': attr.ngFalseValue,
          'ng-change': attr.ngChange,
          'ng-required': attr.ngRequired,
          'required': attr.required
        }, function (value, name) {
          console.log(value + '---' + name)
          if (isDefined(value)) {
            input.attr(name, value);
          }
        });
        console.log(input.attr('ng-model'))
        return function (scope, element, attr) {
          scope.getValue = function () {
            return scope.ngValue || attr.value;
          };
        };
      }
    }
  }]

})
