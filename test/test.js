'use strict';

var nixt = require('nixt');

var fs = require('fs');


describe('should accept input', function () {
  it('from file', function (done) {
    nixt()
      .run('./cli.js test/data/input.json')
      .stdout(fs.readFileSync('test/data/output.js', 'utf8').trim())
      .end(done);
  });

  it('from stdin', function (done) {
    nixt()
      .stdin(fs.readFileSync('test/data/input.json'))
      .run('./cli.js')
      .stdout(fs.readFileSync('test/data/output.js', 'utf8').trim())
      .end(done);
  });
});

describe('should raise an error', function () {
  it('on nonexistent file', function (done) {
    nixt()
      .run('./cli.js nonexistent')
      .code(1)
      .end(done);
  });

  it('on invalid JSON input', function (done) {
    nixt()
      .stdin('not a JSON')
      .run('./cli.js')
      .code(1)
      .end(done);
  });
});
