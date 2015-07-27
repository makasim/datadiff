'use strict';

angular.module('datadiffApp')
  .controller('MainCtrl', function ($scope, $http, $window, commits) {
    var objectPath = $window.objectPath;

    var globalJsondiffpatch = $window.jsondiffpatch;
    globalJsondiffpatch.formatters.html.hideUnchanged();

    var jsondiffpatch = globalJsondiffpatch.create({
      objectHash: function(obj, index) {
        if (obj && obj.self && obj.self.id) {
          return obj.self.id;
        }

        return obj.id || obj._id || '$$index:' + index;
      }
    });

    $scope.commits = commits;

    $scope.show = function (commit, target) {
      if (target == commit.show) {
        commit.collapse ^= true;
      } else {
        commit.show = target;
        commit.collapse = true;
      }
    };

    for (var i in commits) {
      commits[i].removedCount = 0;
      commits[i].addedCount = 0;

      if (i == 0) {
        commits[i].data = jsonpatch.apply({}, commits[i].diff);

        commits[i].addedCount = getStringsCount(commits[i].data);

      } else {
        commits[i].data = jsonpatch.apply(angular.copy(commits[i - 1].data), commits[i].diff);

        countChanges(commits[i - 1], commits[i]);
      }

      commits[i].htmlDiff = globalJsondiffpatch.formatters.html.format(
          // delta
          jsondiffpatch.diff(
              angular.copy(i == 0 ? {} : angular.copy(commits[i - 1].data)),
              angular.copy(commits[i].data)
          ),
          //data
          JSON.parse(JSON.stringify(commits[i].data, function escapeHtml(html) {
            return String(html)
                .replace(/&/g, '&amp;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#39;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;');
          }))
      );
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
      for (var j in commit.diff) {
        if (commit.diff[j].op == 'add') {
          commit.addedCount += getStringsCount(commit.diff[j].value);
        } else if (commit.diff[j].op == 'copy') {
          commit.addedCount += getStringsCount(readPath(commit.data, commit.diff[j].from));
        } else if (commit.diff[j].op == 'move') {
          commit.addedCount += getStringsCount(commit.diff[j].value);
          commit.removedCount += getStringsCount(commit.diff[j].value);
        } else if (commit.diff[j].op == 'replace') {
          commit.addedCount += getStringsCount(commit.diff[j].value);
          commit.removedCount += getStringsCount(readPath(previousCommit.data, commit.diff[j].path));
        } else if (commit.diff[j].op == 'remove') {
          commit.removedCount += getStringsCount(readPath(previousCommit.data, commit.diff[j].path));
        }
      }
    }

    function readPath(obj, path) {
      if (path[0] == '/') {
        path = path.substring(1);
      }

      path = path.replace(/\//g, '.');

      return objectPath.get(obj, path);
    }
  });
