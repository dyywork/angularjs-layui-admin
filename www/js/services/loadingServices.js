define(['angular'], function (angular) {
  'use strict';

  return ['$ionicLoading',function ($ionicLoading) {
    return {
      show: function () {
        $ionicLoading.show({
          template: "<ion-spinner icon='ios' class='light'></ion-spinner><br>" + "加载中...",
          duration: 9000
        })
      },
      hide: function () {
        $ionicLoading.hide()
      }
    }
  }]


  /*var loadingService = function ($ionicLoading) {
    return {
      show: function () {
        $ionicLoading.show({
          template: "<ion-spinner icon='ios' class='light'></ion-spinner><br>" + "加载中...",
          duration: 9000
        })
      },
      hide: function () {
        $ionicLoading.hide()
      }
    }
  }

  loadingService.$inject = ['$ionicLoading'];
  return loadingService;*/
})
