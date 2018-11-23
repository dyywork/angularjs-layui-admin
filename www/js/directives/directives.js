define(function (require) {

  'use strict';

  var angular = require('angular'),
    services = require('services/services'),
    directives = angular.module('app.directives', ['app.services']);
  directives.directive('appVersion', require('directives/VersionDirectives'));
  directives.directive('hideTabs', require('directives/hideTabsDirectives'));
  directives.directive('back', require('directives/backDirectives'));
  directives.directive('ngRightClick', require('directives/rightClickDirectives'));

  directives.directive('slideTree',require('directives/common/slideDirectives'));
  directives.directive('tabSub',require('directives/common/tabDirectives'));
  directives.directive('layDate',require('directives/layuiform/laydataDirective'));

  directives.directive('layuiCheckbox',require('directives/layuiform/formComponent'));

  return directives;
});
