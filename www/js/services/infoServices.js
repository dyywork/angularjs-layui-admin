define(['angular'], function (angular) {
  'use strict';


  return [function () {
    var json = {};
    return {
      save: function (key, value) {
        json[key] = value;
      },
      get: function (key) {
        return json[key];
      },
      saveSession: function (key, value) {
        sessionStorage.setItem(key, JSON.stringify(value));
      },
      getSession: function (key) {
        return JSON.parse(sessionStorage.getItem(key));
      }
    }

  }]
})
