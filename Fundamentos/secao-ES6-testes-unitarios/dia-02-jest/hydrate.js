const hydrate = (str) => {

    let reg = /\d+/g; 
    let  result = str.match(reg)
    let numeros = []
    let soma = 0
    for (let index = 0; index < result.length; index+=1) {
        numeros.push(parseInt(result[index]))
        soma = soma + numeros[index]
    }
    if (soma <=1) {
        return soma + ' copo de água'
    }
    else if(soma > 1){
        return soma + ' copos de água'
  
    }
  }
  console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'))

  module.exports = hydrate