let speed = 140;
const speedCar = (speed) => {
    return speed >=120 ? '`Você ultrapassou o limite de velocidade`': `Você está na velocidade permitida`

};
console.log(speedCar(speed));