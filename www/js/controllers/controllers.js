define(function (require) {
  'use strict';

  var angular = require('angular'),
    controllers = angular.module('app.controllers', ['app.services', 'app.config', 'app.directives', 'app.filters']);

  controllers.controller('DashCtrl', require('controllers/DashCtrl'));
  controllers.controller('ChatsCtrl', require('controllers/ChatsCtrl'));
  controllers.controller('ChatDetailCtrl', require('controllers/ChatDetailCtrl'));
  controllers.controller('AccountCtrl', require('controllers/AccountCtrl'));
  controllers.controller('tabCtrl', require('../../templates/tabCtrl'));

  controllers.controller('loginCtrl',require('../../templates/login/loginCtrl'));

  controllers.controller('homeCtrl',require('../../templates/home/homeCtrl'));
  controllers.controller('formCtrl',require('../../templates/home/formCtrl'));
  controllers.controller('navCtrl',require('../../templates/home/navCtrl'));
  controllers.controller('selectCarCtrl',require('../../templates/home/selectCarCtrl'));
  controllers.controller('progressCtrl',require('../../templates/home/progressCtrl'));
  controllers.controller('collaCtrl',require('../../templates/home/collaCtrl'));
  controllers.controller('badgeCtrl',require('../../templates/home/badgeCtrl'));
  controllers.controller('timelineCtrl',require('../../templates/home/timelineCtrl'));
  controllers.controller('tableCtrl',require('../../templates/table/tableCtrl'));
  controllers.controller('layerCtrl',require('../../templates/unit/layerCtrl'));
  controllers.controller('laydateCtrl',require('../../templates/unit/laydateCtrl'));



  controllers.run(['$rootScope', function ($rootScope) {
    $rootScope.sampleParam = "value";
  }]);

  return controllers;

});



