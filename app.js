document.addEventListener('DOMContentLoaded',()=>{

    const gridDisplay = document.querySelector('.grid')
    const scoreDisplay = document.querySelector('#score')
    const resultDisplay = document.querySelector('#result')
    const width = 4
    let squares = []

    // create the playing board
    function  createBoard(){
        for (let i = 0; i<width*width; i++){
           const square = document.createElement('div')
            square.innerHTML = 0
            gridDisplay.appendChild(square)
            squares.push(square)
            // console.log(squares)

        }
        generate()
        generate()
     }

    createBoard()


    // generate a new number randomly 2 or 4
    function generate() {
        const randomNumber = Math.floor(Math.random() * squares.length)
        if (squares[randomNumber].innerHTML == 0) {
            squares[randomNumber].innerHTML = 2
            //checkFor gameOver()
        } else generate()
    }

    function moveRight(){
        for(let i =0; i<16;i++){
            if(i%4 ===0){
                let totalOne =squares[i].innerHTML
                let totalTwo =squares[i+1].innerHTML
                let totalThree =squares[i+2].innerHTML
                let totalFour =squares[i+3].innerHTML
                let row = [totalOne,totalTwo,totalThree,totalFour]
                console.log(row)

            }
        }
    }
    moveRight()

})