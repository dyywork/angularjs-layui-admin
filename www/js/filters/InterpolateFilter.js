/*global define*/

define(['angular'], function (angular) {
    "use strict";

    return ['VERSION',function (VERSION) {
      return function (text) {
        return String(text).replace(/\%VERSION\%/mg, VERSION);
      };
    }]

   /* var filter = function (VERSION) {
        return function (text) {
            return String(text).replace(/\%VERSION\%/mg, VERSION);
        };
    };

    filter.$inject = ['VERSION'];
    return filter;*/
});