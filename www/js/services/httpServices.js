define(['angular'], function (angular) {
  'use strict';

  return ['$http', '$q',function ($http, $q) {
    var factory = {};
    var urls = '';          //对应请求的地址；
    factory.getUrl=function () {
      return '';
    }

    factory.getlist = function (endpoint, method, params) {
      var defer = $q.defer();
      if (method === 'GET') {
        $http({
          url: urls + endpoint,
          method: "GET",
          headers: {'Content-Type': 'application/json'},
          params: params
        }).success(function (data) {
          defer.resolve(data);
        }).error(function (data, status, config) {
          // defer.resolve(data);
          defer.reject(data);
        }).finally(function (data) {
          defer.reject(data)
        });
      } else {
        $http({
          url: urls + endpoint,
          method: method,
          headers: {'Content-Type': 'application/json'},
          data: params
        }).success(function (data) {
          defer.resolve(data);
        }).error(function (data, status, config) {
          // defer.resolve(data);
          defer.reject(data);
        }).finally(function (data) {
          defer.reject(data)
        });
      }
      return defer.promise;
    };
    return factory;
  }]



  /*var httpService = function ($http, $q) {
    var factory = {};
    var urls = '';          //对应请求的地址；
    factory.getlist = function (endpoint, method, params) {
      var defer = $q.defer();
      if (method === 'GET') {
        $http({
          url: urls + endpoint,
          method: "GET",
          headers: {'Content-Type': 'application/json'},
          params: params
        }).success(function (data) {
          defer.resolve(data);
        }).error(function (data, status, config) {
          // defer.resolve(data);
          defer.reject(data);
        }).finally(function (data) {
          defer.reject(data)
        });
      } else {
        $http({
          url: urls + endpoint,
          method: method,
          headers: {'Content-Type': 'application/json'},
          data: params
        }).success(function (data) {
          defer.resolve(data);
        }).error(function (data, status, config) {
          // defer.resolve(data);
          defer.reject(data);
        }).finally(function (data) {
          defer.reject(data)
        });
      }
      return defer.promise;
    };
    return factory;
  }
  httpService.$inject = ['$http', '$q'];
  return httpService;*/
})
