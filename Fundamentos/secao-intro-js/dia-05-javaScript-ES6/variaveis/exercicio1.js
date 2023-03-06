const imprimeIdade = () => {
    let idadeReal; 
  for (let idade = 30; idade <= 40; idade += 1) {
    console.log('Idade dentro do for:', idade)
    idadeReal = idade
  }
  console.log('Idade fora do for:', idadeReal) // retire essa linha ao implementar o tipo de variável correta.
}
imprimeIdade()