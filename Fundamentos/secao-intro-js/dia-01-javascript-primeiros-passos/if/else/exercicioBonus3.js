let valorCusto = -1
let valorVenda = 3
let impostoSobreOCusto = valorCusto / 5
let valorCustoTotal = valorCusto + impostoSobreOCusto;
let lucro = valorVenda - valorCustoTotal

if (valorCusto > 0 && valorVenda > 0) {
    console.log(lucro * 1000)
}
if (valorCusto < 0 || valorVenda < 0) {
    console.log('Erro')
} 