#!/usr/bin/env node

// 给输入命令行的用户提供一个好看的界面
const inquirer = require('inquirer')
// 从git下载库
const download = require('download-git-repo')

module.exports = async function (name) {
  inquirer
    .prompt([
      {
        name: 'list',
        type: 'list',
        message: 'list',
        choices: ['mobile', 'pc'],
        default: 0
      }
    ])
    .then(res => {
      download(`github:qq9068149/AS-Vue2Template#${res.list}`, name, err => {
        if (!err) {
          // 可以输出一些项目成功的信息
          console.info(`下载${res.list}分支 成功`)
          return
        }
        // 可以输出一些项目失败的信息
        console.info(`下载${res.list}分支 失败`)
      })
    })
}
