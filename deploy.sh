#!/usr/bin/env sh
# abort on errors
set -e
# build
rm -rf dist
npm run build
cd dist

echo 'rodrigocasanova.me' > CNAME
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:rodrigo0345/portfolio-2.0.git master:gh-pages
cd -