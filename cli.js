#!/usr/bin/env node
'use strict'

var fs = require('fs')
var concat = require('concat-stream')
var toU = require('unist-builder-blueprint')
var minimist = require('minimist')
var escodegen = require('escodegen').generate
var bail = require('bail')

var name
var stream

var options = minimist(process.argv.slice(2))

if (options.v || options.version) {
  console.log(require('./package').version)
} else if (options.h || options.help) {
  console.log(
    [
      '',
      'Usage: unist-builder-blueprint [--builder <u>] [escodegen_opts]... [<file>]',
      '',
      '  Convert <file> (stdin by default) to unist-builder notation.',
      '',
      '  Accepts options for escodegen. See escodegen wiki for details.',
      '',
      'Options:',
      '  --builder <u>  Builder function to use (default: "u")'
    ].join('\n')
  )
} else {
  switch (options._.length) {
    case 0:
      name = '<stdin>'
      stream = process.stdin
      break
    case 1:
      name = options._[0]
      stream = fs.createReadStream(name)
      break
    default:
      throw new Error('Pass one file or stdin')
  }

  stream.on('error', bail)
  stream.pipe(concat(onconcat))
}

function onconcat(buf) {
  var estree

  try {
    estree = toU(JSON.parse(buf), {builder: options.builder})
  } catch (error) {
    throw new Error('Could not parse `' + name + '` as JSON: ' + error)
  }

  console.log(escodegen(estree, options))
}
