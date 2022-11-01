import PIECES from "./pieces";

let chessBoard = document.querySelector('.chessboard')

for(let row = 0; row < 8; row++){
    let boxColor;
    let boxStartColorWhite = row % 2 === 0 ? true : false;
    
    for(let column = 0; column < 8; column++){

        if(boxStartColorWhite){
            boxColor = column % 2 === 0 ? '#ddcc99' : '#eee5cc';
        }else
            boxColor = column % 2 === 0 ? '#eee5cc' : '#ddcc99';
        
            let box = document.createElement('div')
            box.style.width = chessBoard.clientWidth / 8 + 'px'
            box.style.height = chessBoard.clientHeight / 8 + "px"
            box.style.border = '2px solid black'
            box.style.backgroundColor = boxColor;

            chessBoard.append(box)
    }
}

for(const piece of PIECES){
   chessBoard.appendChild(piece)
}




    

    



