#!/usr/bin/env node
'use strict';

var usage = require('./lib/usage');

var toU = require('unist-builder-blueprint'),
    escodegen = require('escodegen').generate,
    minimist = require('minimist'),
    readFileStdin = require('read-file-stdin'),
    die = require('or-die'),
    cli = require('help-version')(usage);


var opts = minimist(process.argv.slice(2));

readFileStdin(opts._[0], function (err, buffer) {
  if (err) return die(err.toString());

  try {
    var ast = JSON.parse(buffer.toString());
    var escode = escodegen(toU(ast, { builder: opts.builder }), opts);
    console.log(escode);
  }
  catch (err) {
    die(err.toString());
  }
});
