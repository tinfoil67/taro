1. 先执行yarn，安装最外层的相关依赖，比如：npm-run-all
2. yarn run bootstrap:lerna，安装其他依赖

# build
局部：在特定的package里执行：yarn run build即可

# test
局部test： `yarn run lerna run --scope @tarojs/webpack-runner test:ci`

# publish
暂时先手动改package的name和version，执行完publish后再撤回，不然test命令执行会失败

# 共建的方式
1. github上持续merge taro的源码
2. 公司内网publish时加--tag
