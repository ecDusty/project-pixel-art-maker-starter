// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

// Your code goes here!
    const gHeight = document.getElementById('inputHeight').value;
    const gWidth = document.getElementById('inputWidth').value;
    const pixCanvas = document.getElementById('pixelCanvas');
    let divEl = document.createElement('div');

    do {
        let i = 0;
    } while (i < gHeight) {
        let pixRow = divEl;
        pixRow.className = 'pixRow';

        for(let ii = 0; ii < gWidth; ii++) {
            let pixBlock = divEl;
            pixBlock.className = 'pixBlock';
            pixRow.appendChild(pixBlock);

        }

        pixCanvas.appendChild(pixRow);
        
        i++
    }

}

const button = document.getElementById('Submit');
button.onclick(makeGrid);