
requirejs.config({
  paths: {
    jquery :          "../lib/js/jquery-2.1.4.min",
    IosSelect:        '../lib/iosselect-master/src/iosSelect',
    layui:            '../lib/layui/layui.all',
    angular:          '../lib/ionic/js/angular/angular',
    angularAnimate:   '../lib/ionic/js/angular/angular-animate.min',
    angularSanitize:  '../lib/ionic/js/angular/angular-sanitize.min',
    uiRouter:         '../lib/ionic/js/angular-ui/angular-ui-router.min',
    layuiElement:     '../lib/layui/lay/modules/element',
    layuiForm:        '../lib/layui/lay/modules/form'

  },
  shim: {
    angular :           {exports : 'angular'},
    angularAnimate :    {deps: ['angular']},
    angularSanitize :   {deps: ['angular']},
    uiRouter :          {deps: ['angular']},
    layui:              {exports: 'layui'},
    layuiElement:       {deps:['layui']},
    layuiForm:          {deps:['layui']}
  },
  priority: [
    'angular'
  ],
  deps: [
    'bootstrap'
  ]
});
