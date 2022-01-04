const interval = setInterval(() => {
 console.log("correr....")
},1000)

setTimeout(() => {
clearInterval(interval)
  
  console.log('fim da corrida')
}, 5000);