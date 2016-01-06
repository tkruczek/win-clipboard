var clipboard = require('bindings')('clipboard');

//console.log(addon.hello()); // 'world'
console.log(clipboard.getFormatsCount());
var formats = clipboard.getFormats();
console.log(JSON.stringify(formats));
var HTML = 49474;

/*formats.forEach(function (format) {
  console.log(format);
  var data = clipboard.getData(format);
  console.log(data);
});*/

var data = clipboard.getData(HTML);
//console.log(clipboard);
var regex = /<!--StartFragment-->([\s\S]*)<!--EndFragment-->/gm;

var matches = regex.exec(data);
if (matches) {
  console.log(matches[1]);
}

exports.getFormatsCount = clipboard.getFormatsCount;
exports.getFormats = clipboard.getFormats;
exports.getData = clipboard.getData;
