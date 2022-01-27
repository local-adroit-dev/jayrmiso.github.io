#!/user/bin/env sh

set -e

yarn build 

cd dist

git init
git add -A
git commit -m 'New Deployment'

git push -f git@github.com:local-adroit-dev/main-vue.git master:gh-pages-test

cd - 
