'use strict';

var nixt = require('nixt');

var fs = require('fs');


test('should accept input from file', function (done) {
  nixt()
    .run('./cli.js test/data/input.json')
    .stdout(fs.readFileSync('test/data/output.js', 'utf8').trim())
    .end(done);
});

test('should accept input from stdin', function (done) {
  nixt()
    .stdin(fs.readFileSync('test/data/input.json'))
    .run('./cli.js')
    .stdout(fs.readFileSync('test/data/output.js', 'utf8').trim())
    .end(done);
});

test('should raise an error on nonexistent file', function (done) {
  nixt()
    .run('./cli.js nonexistent')
    .code(1)
    .end(done);
});

test('should raise an error on invalid JSON input', function (done) {
  nixt()
    .stdin('not a JSON')
    .run('./cli.js')
    .code(1)
    .end(done);
});

test('should accept --builder to set custom builder', function (done) {
  nixt()
    .stdin(fs.readFileSync('test/data/input.json'))
    .run('./cli.js --builder=NODE')
    .stdout(fs.readFileSync('test/data/builder-output.js', 'utf8').trim())
    .end(done);
});

test('should accept format options for escodegen', function (done) {
  nixt()
    .stdin(fs.readFileSync('test/data/input.json'))
    .run('./cli.js --format.indent.style="  " --format.quotes=double')
    .stdout(fs.readFileSync('test/data/format-output.js', 'utf8').trim())
    .end(done);
});
