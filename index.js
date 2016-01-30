/**
 * win-clipboard module
 * */
var clipboard = require('bindings')('clipboard');

/**
 * @module win-clipboard/getFormatsCount
 * @returns {Number} Number of formats available in the clipboard
 * */

exports.getFormatsCount = clipboard.getFormatsCount;

/**
* @module win-clipboard/getFormats
* @returns {Array} Array of format ids
* */
exports.getFormats = clipboard.getFormats;

/**
 * @module win-clipboard/getFormatName
 * @param {number} Id of format
 * @return {String} Name of the format
 * */
exports.getFormatName = clipboard.getFormatName;

/**
 * @module win-clipboard/getData
 * @param {Number} Format id
 * @returns {String} Content of clipboard for given format
 * */
exports.getData = clipboard.getData;

