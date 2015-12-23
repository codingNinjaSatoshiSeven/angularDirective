(function () {

  'use strict';

  require('angular');
  require('angular-ui-router');
  require('angular-animate');
  var clickTochangeCtrl = require('./controllers/clickTochange.ctlr.js');
  var clickTochangeDir = require('./directives/clickTochange.dir.js');

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
  .directive('clickTochange', [clickTochangeDir]);

}());
