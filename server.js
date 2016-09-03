'use strict'

var express = require('express')
var app = express()
app.set('json spaces', 2)

app.get('/', function(req, res) {
  res.json(
    {
      "First": "Casey",
      "Last": "McNeil",
      "Occupation": "JS Developer",
      "Email": "c@caseymcneil.com"
    }
  )
})

app.listen(3000)
