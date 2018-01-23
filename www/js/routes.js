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
