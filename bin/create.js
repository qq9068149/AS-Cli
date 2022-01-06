#!/usr/bin/env node

// 给输入命令行的用户提供一个好看的界面
const inquirer = require('inquirer')
// 从git下载库
const download = require('download-git-repo')

module.exports = async function (name) {
  let res

  const template = await inquirer.prompt([
    {
      name: 'list',
      type: 'list',
      message: '选择模板:',
      choices: ['AS-Vue2Template', 'AS-Vue3Template','AS-Editor','AS-Editor-H5'],
      default: 0
    }
  ])

  if(template.list==='AS-Vue2Template'){
     res = await inquirer.prompt([
      {
        name: 'list',
        type: 'list',
        message: '选择mobile or pc:',
        choices: ['mobile', 'pc'],
        default: 0
      }
    ])
  }
  
  console.info(`选择完毕，创建项目中...`)
  download(`github:qq9068149/${template.list}${res?'#'+res.list:''}`, name, err => {
    if (!err) {
      // 可以输出一些项目成功的信息
      console.info(`创建${template.list}模板 成功`)
      return
    }
    // 可以输出一些项目失败的信息
    console.info(`创建${template.list}模板 失败`)
  })
}
