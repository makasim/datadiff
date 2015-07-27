#!/usr/bin/env bash

set -e
set -x

(cd frontend && grunt serve:dist)

cp src/main/resources/public/index.html src/main/resources/templates/view.html
cp frontend/bower_components/jsondiffpatch/public/build/jsondiffpatch-formatters.min.js frontend/dist/public/app/jsondiffpatch-formatters.min.js
cp frontend/bower_components/jsondiffpatch/public/external/diff_match_patch_uncompressed.js frontend/dist/public/app/diff_match_patch_uncompressed.js
cp -r frontend/bower_components/jsondiffpatch/public/formatters-styles frontend/dist/public/app/formatters-styles

mvn package

