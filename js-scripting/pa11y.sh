#!/bin/bash

# Install pa11y
npm install pa11y -g
npm install pa11y-reporter-html -g

# Validate pa11y install and run
pa11y -V
pa11y --runner htmlcs --runner axe --threshold 8 google.co.uk --reporter html --include warnings --include notices > sample.html

# Output status and quit
PA11Y_STATUS=$?
echo "Pa11y reporting finished"
echo "Pa11y status: $PA11Y_STATUS"

if [ $PA11Y_STATUS != 0 ]; then
    echo "BUILD FAILED"
    exit 1
fi
