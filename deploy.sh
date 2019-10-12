#!/usr/bin/env sh
# sudo chmod a+x deploy.sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
cd docs
npm run build
cd -

# 进入生成的文件夹
cd dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m "deploy at `date "+%Y-%m-%d %H:%M:%S"`"

# 如果发布到 https://wj5633.github.io
git push -f git@github.com:wj5633/wj5633.github.io.git master

cd -