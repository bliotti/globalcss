#!/usr/bin/env node

const fs = require('fs')

const css = fs.readFileSync(__dirname + '/global.css', 'utf-8')

console.log(css)

