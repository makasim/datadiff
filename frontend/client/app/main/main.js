'use strict';

angular.module('datadiffApp')
  .config(function ($stateProvider, $sceProvider) {
    $sceProvider.enabled(false);

    $stateProvider
      .state('main', {
        url: '/audit/:type/:audit_id/view',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl',
        resolve: {
          commits: function ($stateParams, Api) {
            return Api.getAudit($stateParams.type, $stateParams.audit_id).then(function (audit) {
              return audit.commits;
            });
          }
        }
      });
  });
