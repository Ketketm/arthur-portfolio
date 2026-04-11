#!/bin/bash
cd /Users/grokia/portfolio
echo "Building portfolio site..."
npm run build 2>&1 | tee /tmp/build.log
echo "Build complete"
cat /tmp/build.log | tail -20
