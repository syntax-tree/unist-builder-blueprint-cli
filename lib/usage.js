'use strict'

var path = require('path')
var fs = require('fs')
var remark = require('remark')
var headingRange = require('mdast-util-heading-range')
var toString = require('mdast-util-to-string')
var getReadmeFile = require('readme-file')

module.exports = function() {
  var readmeFile = getReadmeFile(path.dirname(__dirname))
  var readme = fs.readFileSync(readmeFile, 'utf8')
  var ast = remark.parse(readme)
  var usage

  headingRange(ast, 'CLI', function(heading, body) {
    usage = body
      .map(toString)
      .filter(Boolean)
      .join('\n\n')
  })

  if (!usage) {
    throw new Error('Usage section not found in ' + readmeFile)
  }

  return usage
}
