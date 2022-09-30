#!/usr/bin/env sh
# abort on errors
set -e

rm -rf dist
# build
yarn build
# navigate into the build output directory
cd dist
# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:hieupv-2320/event-rankings.git master:gh-pages
cd -
