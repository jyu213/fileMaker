/**
 * file maker with node
 */

const Mustache = require('mustache')
const path = require('path')
const fs = require('fs')

const FileMaker = function (base, options) {
  // 文件输出路径
  this.base = path.resolve(base)

  // 文件模板路径
  // this.templateFile = path.resolve(options.template)

  // 文件模板数据
  // this.templateData = path.resolve(options.templateData)
}

FileMaker.prototype = {
  /**
   * 模板编译
   * @return {[type]} [description]
   */
  compile (basePath, templateFile, templateData) {
    let body = Mustache.render(templateFile, templateData)
    // console.log(body, 'mustach body')
    fs.writeFileSync(basePath, body, {encoding: 'utf8'})
  },
  run (templateFile, templateData) {
    const file = fs.readFileSync(templateFile, {encoding: 'utf8'})
    const data = typeof templateData === 'string' ? JSON.parse(fs.readFileSync(templateData, {encoding: 'utf8'})) : templateData

    this.compile(this.base, file, data)
  }
}

module.exports = FileMaker
