define(function (require) {

  'use strict';

  var angular = require('angular'),
    config = require('config'),
    services = angular.module('app.services', ['app.config']);

  services.factory('Chats', require('services/Chats'));
  services.factory('httpServices', require('services/httpServices'));
  services.factory('PopupService',require('services/popupServices'));
  services.factory('infoService',require('services/infoServices'));
  services.factory('loadingService',require('services/loadingServices'));

  services.factory('tabsDataService',require('services/tabServices/tabServices'));

  return services;

});




