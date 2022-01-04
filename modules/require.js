const path = require('path')

const soma = require('./export')

console.log(path.basename(__filename))

console.log(soma(2,4))
