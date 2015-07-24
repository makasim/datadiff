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
      commits[i].removedCount = 0;
      commits[i].addedCount = 0;

      if (i == 0) {
        var delta = jsondiffpatch.diff({}, commits[i].data);
        commits[i].addedCount = getStringsCount(commits[i].data);

      } else {
        var delta = jsondiffpatch.diff(commits[i - 1].data, commits[i].data);
        countChanges(commits[i - 1], commits[i]);
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

    function countChanges(previousCommit, commit) {
      for (var i in commit.diff) {
        if (commit.diff[i].op == 'add') {
          commit.addedCount += getStringsCount(commit.diff[i].value);
        } else if (commit.diff[i].op == 'copy') {
          commit.addedCount += getStringsCount(commit.data, readPath(commit.diff[i].from));
        } else if (commit.diff[i].op == 'move') {
          commit.addedCount += getStringsCount(commit.diff[i].value);
          commit.removedCount += getStringsCount(commit.diff[i].value);
        } else if (commit.diff[i].op == 'replace') {
          commit.addedCount += getStringsCount(commit.diff[i].value);
          commit.removedCount += getStringsCount(readPath(previousCommit.data, commit.diff[i].path));
        } else if (commit.diff[i].op == 'remove') {
          commit.removedCount += getStringsCount(readPath(previousCommit.data, commit.diff[i].path));
        }
      }
    }

    function readPath(obj, path) {
      if (path[0] == '/') {
        path = path.substring(1);
      }

      return path.split('/').reduce(function index(obj,i) {return obj[i]}, obj);
    }
  });
