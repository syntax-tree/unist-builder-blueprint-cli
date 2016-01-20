#!/usr/bin/env node
'use strict';

var meow = require('meow'),
    toU = require('unist-builder-blueprint'),
    escodegen = require('escodegen').generate;

var fs = require('fs');


var cli = meow('$ unist-builder-blueprint whatever\n\nfoo bar baz');

console.log(escodegen(toU(JSON.parse(fs.readFileSync(cli.input[0], 'utf8')))));
