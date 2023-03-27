const techList = (array, nome) => {

   if (array.length < 1) {
        return 'Vazio!'
   }
   
    let arr = [] 
    for (let index = 0; index < array.length; index+=1) {
        arr.push({
            tech: array.sort()[index],
            name: nome
        })
    }       
  return arr
  }

  module.exports = techList