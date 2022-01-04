const process = require('process')

const getflag = (flag) => {
 const index = process.argv.indexOf(flag) + 1
 const value = process.argv[index]

return value 
}

module.exports = getflag