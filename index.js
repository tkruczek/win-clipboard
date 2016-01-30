/**
 * win-clipboard module
 * @module win-clipboard
 * */
var clipboard = require('bindings')('clipboard');

/**
 * getFormatsCount
 * @returns {Number} Number of formats available in the clipboard
 * */
exports.getFormatsCount = clipboard.getFormatsCount;

/**
* getFormats
* @returns {Array} Array of format ids
* */
exports.getFormats = clipboard.getFormats;

/**
 * getFormatName
 * @param {number} Id of format
 * @return {String} Name of the format
 * */
exports.getFormatName = clipboard.getFormatName;

/**
 * getData
 * @param {Number} Format id
 * @returns {String} Content of clipboard for given format
 * */
exports.getData = clipboard.getData;

