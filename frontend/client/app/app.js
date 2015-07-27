'use strict';

angular.module('datadiffApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'angularMoment'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $sceProvider) {
    $sceProvider.enabled(false);

    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  });
