## File Maker
模板文件自动生成工具。

### 安装
```bash
npm install i-file-maker
```

### 使用
```bash
Usage: filemaker [options] [command]


  Commands:

    create <dir> [options]  create file
    list                    show template list
    select                  select a template
    help [cmd]              display help for [cmd]

  Options:

    -h, --help     output usage information
    -V, --version  output the version number
```

`filemaker select` 选择一个需要的模板， `filemaker create <file>` 创建文件。

> 模板文件放在 `~/.filemaker/template` 目录下。暂时需要手动创建。
> 模板语法： [`mustache`](https://github.com/janl/mustache.js)

#### create
```bash
Usage: filemaker create <output file name> [options]

  Options:

    -h, --help           output usage information
    -t --template <dir>  use template file
    -d --data <dir>      use source data
```

### mustache 模板语法
```javascript
{{keyName}}  // 赋值
{{#keyName}} {{/keyName}}  // if/forEach
{{^keyName}} {{/keyName}} // 空|null|false
{{.}}  // 迭代
{{> partils}}
{{{keyName}}} // 非转义
{{!comments}} // 注释
```


## TODO
* 文件批量生成
* `mustache` 逆向解析


