#!/usr/bin/env node

// 快速开发Nodejs命令行工具的package
const program = require('commander') 

program
  // 配置版本号信息
  .version(`v${require('../package.json').version}`)
  .usage('<command> [option]')

program
  // 定义命令和参数
  .command('create <app-name>')
  .description('创建项目')
  .option('-p, --pc', 'PC模板')
  .option('-m, --mobile', 'H5模板')
  .action(name => {
      require('./create.js')(name)
  })

// 解析用户执行命令传入参数
program.parse(process.argv)
