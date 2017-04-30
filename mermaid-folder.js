var mermaid = require('mermaid');
var fs = require('fs');
var path = require('path');
fs.readdir(path.join('docs','diagrams'),function(err,files){
    console.log(files);
})