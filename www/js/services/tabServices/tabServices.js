/*global define, console */

define(['angular'], function (angular) {
  "use strict";
  /*
   * chats:tab数据动态生成；
   * method {
   *   all:初始化tab数据，
   *   add:点击slide时生成对应的tab
   *   getRemove :去除tabs
   *   switchTab : 切换tabs
   * }
   * */

  return ['$state', 'infoService', function ($state, infoService) {
    var chats = [{
      "parentId": 0,
      "subId": 0,
      "title": "首页",
      "baseUrl": "tab.home",
      "show": true
    }];


    /*根据下标删除数组*/
    Array.prototype.remove = function (obj) {
      for (var i = 0; i < this.length; i++) {
        var temp = this[i];
        if (!isNaN(obj)) {
          temp = i;
        }
        if (temp == obj) {
          for (var j = i; j < this.length; j++) {
            this[j] = this[j + 1];
          }
          this.length = this.length - 1;
        }
      }
    };


    return {
      all: function () {
        return chats;
      },
      add: function (data, res) {
        chats = data;
        function isOk() {
          for (var i = 0; i < chats.length; i++) {
            if (chats[i].subId === res.subId && chats[i].parentId === res.parentId) {
              chats[i].show = true;
              return true;
            }
          }
        }
        for (var a = 0; a < chats.length; a++) {
          chats[a].show = false;
          if (!isOk()) {
            chats.push(res);
            $state.go(res.baseUrl);

          } else {
            $state.go(res.baseUrl);
          }
        }
        infoService.saveSession('tabNav', chats);
      },
      getRemove: function (res) {   /*删除tab时的判断*/
        if (infoService.getSession('tabNav') && infoService.getSession('tabNav') !== "") {
          chats = infoService.getSession('tabNav');
        }
        for (var i = 0; i < chats.length; i++) {
          if (chats[i].subId === res.subId && res.show && i > 0 && (i + 1) === chats.length && chats[i].parentId === res.parentId) {
            chats[i - 1].show = true;
            $state.go(chats[i - 1].baseUrl);
            chats.remove(i);
          } else if (chats[i].subId === res.subId && !res.show && chats[i].parentId === res.parentId) {
            chats.remove(i);
          } else if (chats[i].subId === res.subId && res.show && i < chats.length && chats[i].parentId === res.parentId) {
            $state.go(chats[i + 1].baseUrl);
            chats[i + 1].show = true;
            chats.remove(i);
          }
        }
        infoService.saveSession('tabNav', chats)
      },
      switchTab: function (res) {
        if (infoService.getSession('tabNav') && infoService.getSession('tabNav') !== "") {
          chats = infoService.getSession('tabNav');
          for (var i = 0; i < chats.length; i++) {
            if (res.subId === chats[i].subId && res.parentId === chats[i].parentId) {
              chats[i].show = true;
              $state.go(res.baseUrl);
            } else {
              chats[i].show = false;
            }
          }
          infoService.saveSession('tabNav', chats);
        } else {
          for (var a = 0; a < chats.length; a++) {
            if (res.subId === chats[a].subId && res.parentId === chats[a].parentId) {
              chats[a].show = true;
              $state.go(res.baseUrl);
            } else {
              chats[a].show = false;
            }
          }
          infoService.saveSession('tabNav', chats);
        }
      }
    };

  }]
});