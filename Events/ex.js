const { inherits } = require('util')

const { EventEmitter } = require('events')

function Pes(name) {
  this.name = name
}

inherits(Pes,EventEmitter)

const p = new Pes('jc')

p.on('oi',(name) => {
  console.log("tudo bem " + name)
})

p.emit('oi',p.name)