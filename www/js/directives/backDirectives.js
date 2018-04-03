define(['angular'],function (angular) {
  'use strict'

  return ['$ionicHistory',function ($ionicHistory) {
    return {
      restrict: 'AEMC',
      replace: true,
      template: '<button class="button button-dark button-clear" on-tap="back()"><i class="icon ion-ios-arrow-left"></i></button>',
      link: function (scope, element, attrs) {
        element.on('click', function () {
          attrs.back = function () {
            $ionicHistory.goBack();
          };
          scope.$apply(attrs.back);
        });

      }
    }
  }]

})
