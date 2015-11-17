/*jshint node:true, mocha:true */

'use strict';

require('should');

var adapter = require('floating-adapter');
var Decimal = require('linear-arbitrary-precision')(adapter);
var presetToDecimal = require('../src/')(Decimal);
var isFunction = require('lodash.isfunction');

describe('preset to decimal', function() {
  it('should return a preset with decimals', function() {
    presetToDecimal([[0, 1], [32, 33.8]]).every(function(scale) {
      return [scale[0].plus, scale[1].plus].every(isFunction);
    }).should.be.exactly(true);
  });
});
