define(['angular'], function (angular) {
  "use strict";

  return ['VERSION',function (VERSION) {
    return function (scope, elm, attrs) {
      elm.text(VERSION);
    };
}]

  /*var directive = function (VERSION) {
    return function (scope, elm, attrs) {
      elm.text(VERSION);
    };
  };

  directive.$inject = ['VERSION'];
  return directive;*/
});
