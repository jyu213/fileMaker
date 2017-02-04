/**
 * file maker with node
 */

const path = require('path');
const fs = require('fs');

const FileMaker = function(base, options) {
    // 文件输出路径
    this.base = path.resolve(base);

    // 文件模板路径
    this.templateFile = path.resolve(options.template);

    // 文件模板数据
    this.templateData = path.resolve(options.templateData);
};

FileMaker.prototype = {
    /**
     * 模板编译
     * @return {[type]} [description]
     */
    compile() {
        fs.readFile(this.templateData, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
            // let temp = fs.readFile(this.templateFile)
            // template(temp, data)
            let outputContent = '';

            fs.writeFileSync(this.base, outputContent, {encoding: 'utf8'});
        });
    }
};

module.exports = FileMaker;
