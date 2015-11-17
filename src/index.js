/*jshint node:true */

'use strict';

function toDecimalFactory(Decimal) {
  return function toDecimal(n) {
    return new Decimal(n.toString());
  };
}

function scaleToDecimalFactory(Decimal) {
  var toDecimal = toDecimalFactory(Decimal);

  return function scaleToDecimal(scale) {
    return scale.map(toDecimal);
  };
}

module.exports = function factory(Decimal) {
  var scaleToDecimal = scaleToDecimalFactory(Decimal);

  return function presetToDecimal(preset) {
    return preset.map(scaleToDecimal);
  };
};
