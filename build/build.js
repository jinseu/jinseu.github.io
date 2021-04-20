var config = require('../config');

const fs = require('fs');
const path = require('path');

function travel(dir) {
    var indexData = {};
    indexData['current'] = path.basename(dir);
    indexData['child'] = [];
    fs.readdirSync(dir).forEach((file) => {
        if (file.startsWith(".")) {
            return
        }
        var pathname = path.join(dir, file)
        if (fs.statSync(pathname).isDirectory()) {
            indexData['child'].push(travel(pathname))
        }
    })
    return indexData
}

var indexData = travel(config.kmPath);
var content = JSON.stringify(indexData);
var distDataPath = path.join(config.build.distRoot, config.build.dataSubDirectory);
if (!fs.existsSync(distDataPath)) {
    console.log("mkdir " + distDataPath)
    fs.mkdirSync(distDataPath, { recursive: true }, function (err, path) {
        if (err) {
            return console.log(err);
        }
        console.log(path);
    })
}
var distIndexPath = path.join(distDataPath, config.build.dataIndexName);
var ws = fs.writeFile(distIndexPath, content, { flag: 'wx' }, function (err, data) {
    if (err) {
        return console.log(err);
    }
    console.log(data);
});
