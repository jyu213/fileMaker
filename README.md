## File Maker
file maker with npm cli.

## TODO

`npm install fileMaker -g`
fileMaker(fm) create file
fm set --name x --template A

fm create A --path A --out B
fm create --opt X

fm create template file (in node_modules ??)

模板语法： `mustache`

```javascript
{{keyName}}  // 赋值
{{#keyName}} {{/keyName}}  // if/forEach
{{^keyName}} {{/keyName}} // 空|null|false
{{.}}  // 迭代
{{> partils}}
{{{keyName}}} // 非转义?
{{!comments}} // 注释
```
## F
