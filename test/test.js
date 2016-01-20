'use strict';

var nixt = require('nixt'),
    bail = require('bail');

var fs = require('fs');


nixt()
  .run('./cli.js test/input.json')
  .stdout(fs.readFileSync('test/output.js', 'utf8').trim())
  .end(bail);
