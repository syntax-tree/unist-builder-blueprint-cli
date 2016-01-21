#!/usr/bin/env node
'use strict';

var toU = require('unist-builder-blueprint'),
    escodegen = require('escodegen').generate,
    meow = require('meow'),
    readFileStdin = require('read-file-stdin'),
    die = require('or-die');

var fs = require('fs');


var cli = meow('$ unist-builder-blueprint whatever\n\nfoo bar baz');

readFileStdin(cli.input[0], function (err, buffer) {
  if (err) return die(err.toString());

  try {
    console.log(escodegen(toU(JSON.parse(buffer.toString()))));
  }
  catch (err) {
    die(err.toString());
  }
});
