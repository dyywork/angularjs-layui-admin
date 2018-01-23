/*global define, require */

define(['app'], function (app) {
  'use strict';
  app.run([function () {

  }]);

  app.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {


      $stateProvider
        .state('tab', {
          url: '/tab',
          views: {
            'login': {
              templateUrl: 'templates/tabs.html',
              controller: 'tabCtrl'
            }
          }
        })

        .state('login', {
          url: '/login',
          views: {
            'login': {
              templateUrl: 'templates/login/login.html',
              controller: 'loginCtrl'
            }
          }
        })
        // Each tab has its own nav history stack:
        .state('tab.home', {
          url: '/home',
          cache: false,
          views: {
            'home': {
              templateUrl: 'templates/home/home.html',
              controller: 'homeCtrl'
            }
          }
        })

        .state('tab.form', {
          url: '/home/form',
          cache: false,
          views: {
            'home': {
              templateUrl: 'templates/home/form.html',
              controller: 'formCtrl'
            }
          }
        })

        .state('tab.nav', {
          url: '/home/nav',
          cache: false,
          views: {
            'home': {
              templateUrl: 'templates/home/nav.html',
              controller: 'navCtrl'
            }
          }
        })

        .state('tab.selectCar', {
          url: '/home/selectCar',
          cache: false,
          views: {
            'home': {
              templateUrl: 'templates/home/selectCar.html',
              controller: 'selectCarCtrl'
            }
          }
        })

        .state('tab.progress', {
          url: '/home/progress',
          cache: false,
          views: {
            'home': {
              templateUrl: 'templates/home/progress.html',
              controller: 'progressCtrl'
            }
          }
        })
        .state('tab.colla', {
          url: '/home/colla',
          cache: false,
          views: {
            'home': {
              templateUrl: 'templates/home/colla.html',
              controller: 'collaCtrl'
            }
          }
        })
        .state('tab.badge', {
          url: '/home/badge',
          cache: false,
          views: {
            'home': {
              templateUrl: 'templates/home/badge.html',
              controller: 'badgeCtrl'
            }
          }
        })

        .state('tab.timeline', {
          url: '/home/timeline',
          cache: false,
          views: {
            'home': {
              templateUrl: 'templates/home/timeline.html',
              controller: 'timelineCtrl'
            }
          }
        })
        .state('tab.layer', {
          url: '/unit/layer',
          cache: false,
          views: {
            'home': {
              templateUrl: 'templates/unit/layer.html',
              controller: 'layerCtrl'
            }
          }
        })

        .state('tab.laydate', {
          url: '/unit/laydate',
          cache: false,
          views: {
            'home': {
              templateUrl: 'templates/unit/laydate.html',
              controller: 'laydateCtrl'
            }
          }
        })


        .state('tab.dash', {
          url: '/home/dash',
          cache: false,
          views: {
            'home': {
              templateUrl: 'templates/tab-dash.html',
              controller: 'DashCtrl'
            }
          }
        })

        .state('tab.chats', {
          url: '/home/chats',
          cache: false,
          views: {
            'home': {
              templateUrl: 'templates/tab-chats.html',
              controller: 'ChatsCtrl'
            }
          }
        })
        .state('tab.table', {
          url: '/home/table',
          cache: false,
          views: {
            'home': {
              templateUrl: 'templates/table/table.html',
              controller: 'tableCtrl'
            }
          }
        })
        .state('tab.chat-detail', {
          url: '/chats/:chatId',
          views: {
            'tab-chats': {
              templateUrl: 'templates/chat-detail.html',
              controller: 'ChatDetailCtrl'
            }
          }
        })

        .state('tab.account', {
          url: '/account',
          views: {
            'tab-account': {
              templateUrl: 'templates/tab-account.html',
              controller: 'AccountCtrl'
            }
          }
        });

      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/login');

    }]);


});
