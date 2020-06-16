'use strict'

var fs = require('fs')
var test = require('tape')
var nixt = require('nixt')

test('should accept input', function (t) {
  t.plan(2)

  nixt()
    .run('./cli.js test/fixtures/input.json')
    .stdout(String(fs.readFileSync('test/fixtures/output.txt')).trim())
    .end(function (err) {
      t.ifErr(err, 'from file')
    })

  nixt()
    .stdin(fs.readFileSync('test/fixtures/input.json'))
    .run('./cli.js')
    .stdout(fs.readFileSync('test/fixtures/output.txt', 'utf8').trim())
    .end(function (err) {
      t.ifErr(err, 'from stdin')
    })
})

test('should raise an error', function (t) {
  t.plan(3)

  nixt()
    .run('./cli.js foo bar')
    .code(1)
    .end(function (err) {
      t.ifErr(err, 'on multiple files')
    })

  nixt()
    .run('./cli.js nonexistent')
    .code(1)
    .end(function (err) {
      t.ifErr(err, 'on nonexistent file')
    })

  nixt()
    .stdin('not a JSON')
    .run('./cli.js')
    .code(1)
    .end(function (err) {
      t.ifErr(err, 'on invalid JSON input')
    })
})

test('should accept', function (t) {
  t.plan(4)

  nixt()
    .stdin(fs.readFileSync('test/fixtures/input.json'))
    .run('./cli.js --builder=NODE')
    .stdout(String(fs.readFileSync('test/fixtures/builder-output.txt')).trim())
    .end(function (err) {
      t.ifErr(err, '--builder to set custom builder')
    })

  nixt()
    .stdin(fs.readFileSync('test/fixtures/input.json'))
    .run('./cli.js --format.indent.style="  " --format.quotes=double')
    .stdout(String(fs.readFileSync('test/fixtures/format-output.txt')).trim())
    .end(function (err) {
      t.ifErr(err, 'format options for escodegen')
    })

  nixt()
    .run('./cli.js --help')
    .code(0)
    .end(function (err) {
      t.ifErr(err, 'help')
    })

  nixt()
    .run('./cli.js --version')
    .code(0)
    .end(function (err) {
      t.ifErr(err, 'version')
    })
})
