const {  } = require('events')

const process = require('process')

process.stdout.write("Teu nome > ")
const name = process.stdin.on("data",(data) => {

const event = new EventEmitter()

event.on('saySomething',(na) => {
  console.log('\n\nEu ouvi você ' + na)
})

event.emit('saySomething',String(data))


process.exit()
})
/*

// ouvir uma unica vez

const event = new EventEmitter()

event.once('oi',(sms) => {
console.log(sms)
  
})


event.emit('oi','tudo bem')

event.emit('oi','como vai')

*/

