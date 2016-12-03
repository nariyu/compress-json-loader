/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author @nariyu
*/
module.exports = function(source) {
	this.cacheable && this.cacheable();
	var value = typeof source === "string" ? JSON.parse(source) : source;
	this.value = [value];
	return "module.exports = JSON.parse(require('lz-string').decompressFromBase64(\"" + require('lz-string').compressToBase64(JSON.stringify(value)) + "\"));";
}
