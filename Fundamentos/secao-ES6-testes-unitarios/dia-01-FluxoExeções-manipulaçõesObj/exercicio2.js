const checkAluno = (name, age) => {
    if (name === '' || age === undefined || age === '') {
        throw new Error('Todas as informações são necessárias')
    }

    if (age < 18) {
        throw new Error('Ops, infelizmente nesse momento você não pode fazer as aulas')
    }

    if (age > 18) {
        return 'Nome, seja bem-vindo(a) à AuTrybe!'
    }
}

const studentRegister = (name, age) => {
    try {
        checkAluno(name, age)
        const result = 'Boas vindas'
        return result;
    } catch (error){
        return error.message
         
        }
  }
console.log(studentRegister('biel', 18))