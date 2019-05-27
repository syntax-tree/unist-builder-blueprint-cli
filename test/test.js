'use strict'

/* eslint-env mocha */

var fs = require('fs')
var nixt = require('nixt')

describe('should accept input', function() {
  it('from file', function(done) {
    nixt()
      .run('./cli.js test/fixtures/input.json')
      .stdout(String(fs.readFileSync('test/fixtures/output.txt')).trim())
      .end(done)
  })

  it('from stdin', function(done) {
    nixt()
      .stdin(fs.readFileSync('test/fixtures/input.json'))
      .run('./cli.js')
      .stdout(fs.readFileSync('test/fixtures/output.txt', 'utf8').trim())
      .end(done)
  })
})

describe('should raise an error', function() {
  it('on multiple files', function(done) {
    nixt()
      .run('./cli.js foo bar')
      .code(1)
      .end(done)
  })

  it('on nonexistent file', function(done) {
    nixt()
      .run('./cli.js nonexistent')
      .code(1)
      .end(done)
  })

  it('on invalid JSON input', function(done) {
    nixt()
      .stdin('not a JSON')
      .run('./cli.js')
      .code(1)
      .end(done)
  })
})

describe('should accept', function() {
  it('--builder to set custom builder', function(done) {
    nixt()
      .stdin(fs.readFileSync('test/fixtures/input.json'))
      .run('./cli.js --builder=NODE')
      .stdout(
        String(fs.readFileSync('test/fixtures/builder-output.txt')).trim()
      )
      .end(done)
  })

  it('format options for escodegen', function(done) {
    nixt()
      .stdin(fs.readFileSync('test/fixtures/input.json'))
      .run('./cli.js --format.indent.style="  " --format.quotes=double')
      .stdout(String(fs.readFileSync('test/fixtures/format-output.txt')).trim())
      .end(done)
  })
})

describe('other options', function() {
  it('--help', function(done) {
    nixt()
      .run('./cli.js --help')
      .code(0)
      .end(done)
  })

  it('--version', function(done) {
    nixt()
      .run('./cli.js --version')
      .code(0)
      .end(done)
  })
})
