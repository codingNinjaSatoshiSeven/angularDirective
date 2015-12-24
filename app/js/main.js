(function () {

  'use strict';

  require('angular');
  require('angular-ui-router');
  require('angular-animate');
  var clickTochangeCtrl = require('./controllers/clickTochange.ctlr.js');
  var clickTochangeDir = require('./directives/clickTochange.dir.js');
  var clickToAnimateCtlr = require('./controllers/clickToAnimate.ctlr.js');
  var clickToAnimateDir = require('./directives/clickToAnimate.dir.js');
  var hoverToTransitCtlr = require('./controllers/hoverToTransit.ctlr.js');
  var hoverToTransitDir = require('./directives/hoverToTransit.dir.js');

  angular.module('App', ['ngAnimate', 'ui.router'])


  .config([
    '$stateProvider', 
    '$urlRouterProvider', 
    '$logProvider', 
    function($stateProvider, $urlRouterProvider, $logProvider) {
      $logProvider.debugEnabled(true);
      $urlRouterProvider.otherwise('/home');

      $stateProvider
      .state("home", {
          url: "/home"
      })
      .state("clickTochange", {
          url: "/clickTochange",
          templateUrl: "./partials/clickTochange.html",
          controller: "ClickTochangeController"
      })
      .state("clickToAnimate", {
          url: "/clickToAnimate",
          templateUrl:"./partials/clickToAnimate.html",
          controller: "ClickToAnimateController"
      })
      .state("hoverToTransit", {
          url: "/hoverToTransit",
          templateUrl:"./partials/hoverToTransit.html",
          controller: "HoverToTransitController"
      }); 
    }
  ])
  .run( function($rootScope,$state, $location) {

    $rootScope.$on('$stateChangeError', function () {
       // Redirect user to our home page
      
      $state.go('home');
    });
  })

  //Load controller
  .controller('ClickTochangeController', ['$scope', clickTochangeCtrl])
  .directive('clickTochange', [clickTochangeDir])
  .controller('ClickToAnimateController', ['$scope', clickToAnimateCtlr])
  .directive('clickToAnimate', [clickToAnimateDir])
  .controller('HoverToTransitController', ['$scope', hoverToTransitCtlr])
  .directive('hoverToTransit', [hoverToTransitDir])
  ;

}());
