#!/usr/bin/env bash

set -e
set -x

(cd frontend && grunt serve:dist) && cp public/index.html src/main/resources/templates/view.html && cp frontend/bower_components/jsondiffpatch/public/build/jsondiffpatch-formatters.min.js public/app/jsondiffpatch-formatters.min.js && cp -r frontend/bower_components/jsondiffpatch/public/formatters-styles public/app/formatters-styles &&  mvn compile && mvn package

