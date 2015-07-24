'use strict';

angular.module('datadiffApp')
  .factory('Api', function ($http, $q) {

    return {
      getAudit: getAudit
    };

    function getAudit(type,id) {
      console.log(type, id);
      var request = $http({
        method: "get",
        url: '/audit/'+ type +'/'+ id
      });

      return request.then(handleSuccess, handleError);
    }

    ////////////////////  private functions  //////////////////////

    function handleError(response) {
      return $q.reject(response);
    }

    function handleSuccess(response) {
      return response.data;
    }

  });
