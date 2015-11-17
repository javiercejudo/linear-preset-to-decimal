# linear-preset-to-decimal

[![Build Status](https://travis-ci.org/javiercejudo/linear-preset-to-decimal.svg)](https://travis-ci.org/javiercejudo/linear-preset-to-decimal)
[![Coverage Status](https://coveralls.io/repos/javiercejudo/linear-preset-to-decimal/badge.svg?branch=master)](https://coveralls.io/r/javiercejudo/linear-preset-to-decimal?branch=master)
[![Code Climate](https://codeclimate.com/github/javiercejudo/linear-preset-to-decimal/badges/gpa.svg)](https://codeclimate.com/github/javiercejudo/linear-preset-to-decimal)

Ensures a linear scale has decimals

## Install

    npm i linear-preset-to-decimal

## Usage

```js
var Decimal = require('linear-arbitrary-precision')(require('floating-adapter'));
var presetToDecimal = require('linear-preset-to-decimal')(Decimal);

presetToDecimal([[0, 1], [32, 33.8]]);
// => [[new Decimal('0'), new Decimal('1')], [new Decimal('32'), new Decimal('33.8')]]
```

## Related projects

- [linear-presets](https://github.com/javiercejudo/linear-presets): linear presets for common units.
- [linear-converter](https://github.com/javiercejudo/linear-converter): flexible linear converter.
