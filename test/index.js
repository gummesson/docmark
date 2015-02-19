var fs      = require('fs')
var test    = require('tape')
var docmark = require('../')

test('docmark(str)', function(assert) {
  var expected = fs.readFileSync('test/fixtures/input.css', 'utf8').trim()
  var actual   = fs.readFileSync('test/fixtures/output.md', 'utf8').trim()
  assert.equal(actual, docmark(expected), 'Extracts Markdown from comments')
  assert.end()
})
