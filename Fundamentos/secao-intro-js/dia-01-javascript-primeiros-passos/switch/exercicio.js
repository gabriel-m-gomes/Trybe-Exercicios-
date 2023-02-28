let peca = 'Cavalo2'

 switch (peca.toLowerCase()) {

        case 'rei':
        console.log('O rei pode mover-se em todas as direções')
            break;

        case 'rainha':
        console.log('A rainha move-se ao longo da horizontal, vertical e diagonais')
            break;

        case 'bispo':
        console.log('O bispo move-se ao longo da diagonal.')
        break;

        case 'cavalo':
        console.log('sentido horizontal e mais uma na vertical ou vice-versa.')
        break;

        case 'torre':
        console.log(' movimenta-se pela vertical ou horizontal')
        break;

        case 'peão':
        console.log('movimenta-se apenas uma casa para frente')
        break;

        default:
        console.log('nenhuma peça encontrada')
 }