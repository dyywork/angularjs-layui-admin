
requirejs.config({
  paths: {
    jquery :          "../lib/js/jquery-2.1.4.min",
    IosSelect:        '../lib/iosselect-master/src/iosSelect',
    layui:            '../lib/layui/layui.all',
    angular:          '../lib/ionic/js/angular/angular',
    angularAnimate:   '../lib/ionic/js/angular/angular-animate.min',
    angularSanitize:  '../lib/ionic/js/angular/angular-sanitize.min',
    uiRouter:         '../lib/ionic/js/angular-ui/angular-ui-router.min'

  },
  shim: {
    angular :           {exports : 'angular'},
    angularAnimate :    {deps: ['angular']},
    angularSanitize :   {deps: ['angular']},
    uiRouter :          {deps: ['angular']},
    layui:              {des:['jquery'],exports: 'layui'}

  },
  priority: [
    'angular'
  ],
  deps: [
    'bootstrap'
  ]
});
