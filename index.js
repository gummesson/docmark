var extract = require('extract-comments')
var loop    = require('looping')

function docmark(str) {
  var obj = extract(str)
  var doc = []
  loop(obj, function(line) {
    doc.push(obj[line].comment)
  })
  return doc.join('').trim()
}

module.exports = docmark
