'use strict';

angular.module('datadiffApp')
  .controller('MainCtrl', function ($scope, $http, $window, commits) {
    var jsondiffpatch = $window.jsondiffpatch;

    jsondiffpatch.formatters.html.hideUnchanged();

    $scope.commits = commits;

    $scope.showData = function (commit) {
      commit.collapse = true;
      commit.show = 'data';
    };

    $scope.showMeta = function (commit) {
      commit.collapse = true;
      commit.show = 'meta';
    };

    $scope.showDiff = function (commit) {
      commit.collapse = true;
      commit.show = 'diff';
    };

    $scope.collapse = function (commit) {
      commit.collapse ^= true;
    };


    for (var i in commits) {
      if (i == 0) {
        var delta = jsondiffpatch.diff({}, commits[i].data);
        commits[i].dataScore = getStringsCount(commits[i].data);
      } else {
        var delta = jsondiffpatch.diff(commits[i - 1].data, commits[i].data);
        commits[i].dataScore = getStringsCount(commits[i].data) - getStringsCount(commits[i - 1].data);
      }
      commits[i].htmlDiff = jsondiffpatch.formatters.html.format(delta, commits[i].data);
    }

    $scope.getHeader = function (meta) {
      var result = '';
      if (meta.user) {
        if (meta.user.name) {
          result = meta.user.name;
        }
      }
      if (meta.cli) {
        result = meta.cli.argv;
      }
      if (meta.http_request && !meta.user) {
        result = meta.http_request.method+ ' ' +meta.http_request.uri;
      }
      if (meta.message) {
        result = meta.message;
      }
      return result;
    };

    function getStringsCount(data) {
      var str = JSON.stringify(data, null, 2);
      var res = str.split('\n');
      return res.length;
    }

  });
