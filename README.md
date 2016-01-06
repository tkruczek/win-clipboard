## Windows Clipboard

Node module that give access to Windows clipboard - HTML format specifically. 

### Usage

```js
var clipboard = require('win-clipboard');
console.log(clipboard.getFormatsCount());
var formats = clipboard.getFormats();
console.log(JSON.stringify(formats));
var HTML = 49474;

//List data for all formats available
formats.forEach(function (format) {
  console.log(format);
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
```