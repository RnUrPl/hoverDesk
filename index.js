const board = document.querySelector('#board')
const colors = ['#000080', '#00008B', '	#0000FF', '#008000', '008B8B','	#00CED1','	#00FFFF']
const SQUARES_NUM = 1000

for(let i = 0; i< SQUARES_NUM; i++){
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square)
}


function setColor(element) {
    const color = randomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element){
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #0000`
}

function randomColor(){
    const index = Math.floor(Math.random() *colors.length)
    return colors[index]
}