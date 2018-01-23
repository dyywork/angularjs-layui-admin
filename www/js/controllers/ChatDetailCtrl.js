define(function () {
  'use strict';

  return ['$scope', '$state','$stateParams','Chats',function ($scope, $state,$stateParams,Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
  }]

});
