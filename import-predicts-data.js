// read predicts data set and import into elasticsearch
var es = require('esta');
var fs = require('fs');
var filename = 'PREDICTS.json'; // see: http://git.io/vLXvv

fs.readFile(filename, 'utf8', function(err, data) {
  console.log(err);
  // console.log(data);
  var json = JSON.parse(data);
  // console.log(json);
});

// >> Sadly the PREDICTS.json has special characters which cannot be parsed
// >> possible line of enqury:
// http://stackoverflow.com/questions/2670037/how-to-remove-invalid-utf-8-characters-from-a-javascript-string

// trying sync
var json = JSON.parse(fs.readFileSync(filename, 'utf8'));
console.log(json);
