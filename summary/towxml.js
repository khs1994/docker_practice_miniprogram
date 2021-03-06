const towxml = require('../client/node_modules/@khs1994/towxml');
const fs = require('fs');

// let targetPath = '../client/pages/docker/index/summary.js';
// fs.unlinkSync(targetPath);

//Markdown 转 towxml 数据
let data = towxml(fs.readFileSync('./summary.mini.md', 'utf-8'), 'markdown');

try{
  fs.mkdirSync(__dirname + '/dist');
}catch{}

// fs.writeFileSync(targetPath, 'module.exports=' + JSON.stringify(data));
fs.writeFileSync(__dirname + '/dist/towxml.summary.json', JSON.stringify(data));

// html 转 towxml 数据
// let data = towxml.toJson('<h1>Article title</h1>','html');
