/**
 * Created by tomek on 2016-01-10.
 */
var clipboard = require('./index.js');
console.log(clipboard.getFormatsCount());
var formats = clipboard.getFormats();
console.log(JSON.stringify(formats));
var HTML = 49474;

//List data for all formats available
formats.forEach(function (format) {
    console.log('************************************');
    console.log('Id ', format);
    console.log('Name: ', clipboard.getFormatName(format));
    console.log('************************************');
    var data = clipboard.getData(format);
    console.log(data);
});

var data = clipboard.getData(HTML);
//console.log(clipboard);
var regex = /<!--StartFragment-->([\s\S]*)<!--EndFragment-->/gm;

var matches = regex.exec(data);
if (matches) {
    console.log(matches[1]);
}