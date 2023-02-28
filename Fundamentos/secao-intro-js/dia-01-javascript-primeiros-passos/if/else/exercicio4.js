


let A = 65
let B = 100
let C = -1

let total = A + B + C

let verificar = A > 0 && B > 0 && C > 0

if(verificar){
  if (total === 180) {
    console.log(true)
  } else {
    console.log(false)
  }
} else {
  console.log('Erro: ângulo inválido!')
}