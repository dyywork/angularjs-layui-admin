define([
    'angular',
    'jquery',
    'IosSelect',
    'layui',
    'layuiElement',
    'layuiForm',
    'uiRouter',
    'config',
    'filters/filters',
    'services/services',
    'directives/directives',
    'controllers/controllers'],

  function (angular, uiRouter) {
    'use strict';
    var app = angular.module('app', [
      'app.controllers',
      'app.directives',
      'app.services',
      'app.filters',
      'app.config',
      'ui.router']);
    return app;
  });





