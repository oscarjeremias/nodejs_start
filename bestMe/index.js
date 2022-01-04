const question = [
 "O que aprendeste hoje",
 "O que ti deixou aborrecido", 
 "O que você poderia fazer para melhorar",
 "O que ti deixou feliz hoje",
 "Quantas pessoas ajudeeste hoje",
  ]
  
  const ask = (index = 0) => {
  process.stdout.write("\n\n" + question[index] + " >> ")  
  }
  const response = []
  process.stdin.on("data", data => {
   response.push(data.toString().trim()) 
if(response.length < question.length){
  ask(response.length)
}else {
  process.exit()
}
  })
  
  ask()
  
  
  process.on('exit',() => {
  console.log(`
  ""Obrigado por responder as nossas perguntas""
 
  
  O que aprendeste hoje
  > ${response[0]}
  
  O que ti deixou aborrecido
  > ${response[1]}
  
  O que você poderia fazer para melhorar
  > ${response[2]}
  
  O que ti deixou feliz hoje 
  > ${response[3]}
  
  Quantas pessoas ajudeeste hoje
  > ${response[4]}
  
  `)
  })