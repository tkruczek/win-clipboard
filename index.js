var clipboard = require('bindings')('clipboard');

exports.getFormatsCount = clipboard.getFormatsCount;
exports.getFormats = clipboard.getFormats;
exports.getData = clipboard.getData;
