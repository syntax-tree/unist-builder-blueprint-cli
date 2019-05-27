#!/usr/bin/env node
'use strict'

var toU = require('unist-builder-blueprint')
var escodegen = require('escodegen').generate
var minimist = require('minimist')
var readFileStdin = require('read-file-stdin')
var die = require('or-die')
var usage = require('./lib/usage')

require('help-version')(usage)

var opts = minimist(process.argv.slice(2))

readFileStdin(opts._[0], function(err, buffer) {
  if (err) return die(err.toString())

  try {
    var ast = JSON.parse(buffer.toString())
    var escode = escodegen(toU(ast, {builder: opts.builder}), opts)
    console.log(escode)
  } catch (error) {
    die(error.toString())
  }
})
