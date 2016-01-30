var clipboard = require('bindings')('clipboard');

exports.getFormatsCount = clipboard.getFormatsCount;
exports.getFormats = clipboard.getFormats;
exports.getFormatName = clipboard.getFormatName;
exports.getData = clipboard.getData;

