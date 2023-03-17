
const main = document.querySelector("main")
const backGroudBtn = document.querySelectorAll("#background-color>button")
const colorBtn = document.querySelectorAll("#font-color>button")
const sizeBtn = document.querySelectorAll("#font-size>button")
const lineBtn = document.querySelectorAll("#line-height>button")



const changeBackGround = (event) => {
    const backGroundColor = event.target.innerText
    main.style.backgroundColor = backGroundColor
    localStorage.setItem('backGroundColor', backGroundColor)
    
}

const createEventBackGround = () => {
    for (let index = 0; index < backGroudBtn.length; index+=1) {
        const btn = backGroudBtn[index]
         btn.addEventListener('click', changeBackGround)
    }
}




const changeFontColor = (event) => {
    const fontColor = event.target.innerText
    main.style.color = fontColor
    localStorage.setItem('fontColor', fontColor)
}

const createEventFont = () => {
    for (let index = 0; index < colorBtn.length; index+=1) {
        const btn = colorBtn[index]
        btn.addEventListener('click', changeFontColor)
    }
}



const changeSize = (event) => {
    const size = event.target.innerText
    main.style.fontSize = size
    localStorage.setItem('size', size)
}

const createEventSize = () => {
    for (let index = 0; index < sizeBtn.length; index+=1) {
        const btn = sizeBtn[index]
        btn.addEventListener('click', changeSize)
    }
}

const changeLine = (event) => {
    const line = event.target.innerText
    main.style.lineHeight = line
    localStorage.setItem('line', line)
}


    for (let index = 0; index < lineBtn.length; index=+1) {
        const btn = lineBtn[index]
        btn.addEventListener('click', changeLine)
    }



createEventBackGround()
createEventSize()
createEventFont()



window.onload = () => {
    const backGroundColor = localStorage.getItem('backGroundColor')
    const fontColor = localStorage.getItem('fontColor')
    const size = localStorage.getItem('size')
    const line = localStorage.getItem('line')

    main.style.lineHeight = line
    main.style.color = fontColor
    main.style.backgroundColor = backGroundColor
    main.style.fontSize = size
}