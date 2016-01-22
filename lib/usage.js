'use strict';

var remark = require('remark'),
    headingRange = require('mdast-util-heading-range'),
    toString = require('mdast-util-to-string'),
    getReadmeFile = require('readme-file');

var path = require('path'),
    fs = require('fs');


module.exports = function () {
  var readmeFile = getReadmeFile(path.dirname(__dirname));
  var readme = fs.readFileSync(readmeFile, 'utf8');
  var ast = remark.parse(readme);
  var usage;

  headingRange(ast, 'CLI', function (heading, body) {
    usage = body.map(toString).join('\n\n');
  });

  if (!usage) {
    throw Error('Usage section not found in ' + readmeFile);
  }

  return usage;
};
