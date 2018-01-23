define(['angular'],function (angular) {
  'use strict';

  return ['$ionicPopup',function ($ionicPopup) {
    return {
      alert: function (data, callback, key) {
        $ionicPopup.alert({
          title: '提示',
          template: "<div style='text-align: center;font-size: 1.2rem'>" + data + "</div>",
          okText: "确定",
          okType: "button-orgine dyy-border-rad"
        }).then(function (data) {
          if (typeof (callback) === "function") {
            callback();
          }
        })
      }
    }
  }]


  /*var popup = function ($ionicPopup) {
    return {
      alert: function (data, callback, key) {
        $ionicPopup.alert({
          title: '提示',
          template: "<div style='text-align: center;font-size: 1.2rem'>" + data + "</div>",
          okText: "确定",
          okType: "button-orgine dyy-border-rad"
        }).then(function (data) {
          if (typeof (callback) === "function") {
            callback();
          }
        })
      }
    }
  }

  popup.$inject = ['$ionicPopup']
  return popup;*/

})
