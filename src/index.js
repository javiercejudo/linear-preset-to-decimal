/*jshint node:true */

'use strict';

var scaleToDecimalFactory = require('linear-scale-to-decimal');

module.exports = function factory(Decimal) {
  var scaleToDecimal = scaleToDecimalFactory(Decimal);

  return function presetToDecimal(preset) {
    return preset.map(scaleToDecimal);
  };
};
