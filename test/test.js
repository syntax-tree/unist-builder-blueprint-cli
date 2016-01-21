'use strict';

var nixt = require('nixt'),
    bail = require('bail');

var fs = require('fs');


nixt()
  .run('./cli.js test/input.json')
  .stdout(fs.readFileSync('test/output.js', 'utf8').trim())
  .end(bail);

nixt()
  .stdin(fs.readFileSync('test/input.json'))
  .run('./cli.js')
  .stdout(fs.readFileSync('test/output.js', 'utf8').trim())
  .end(bail);

nixt()
  .run('./cli.js nonexistent')
  .code(1)
  .end(bail);

nixt()
  .stdin('not a JSON')
  .run('./cli.js')
  .code(1)
  .end(bail);
