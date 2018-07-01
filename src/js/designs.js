// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

// Your code goes here!
    const gHeight = document.getElementById('inputHeight').value;
    const gWidth = document.getElementById('inputWidth').value;
    const pixCanvas = document.getElementById('pixelCanvas');

    pixCanvas.innerHTML = '';
    pixCanvas.style.maxWidth = (gWidth * 20 + gWidth + 1) + `px`;
    pixCanvas.style.width = `100%`;

    let i = 0;
    
    while (i < gHeight) {
        let pixRow = document.createElement('div');
        pixRow.className = 'pixRow';

        for(let ii = 0; ii < gWidth; ii++) {
            let pixBlock = document.createElement('div');
            pixBlock.className = 'pixBlock';
            pixRow.appendChild(pixBlock);

        }

        pixCanvas.appendChild(pixRow);
        
        i++
    }

}

const button = document.getElementById('Submit');
button.addEventListener('click', function(e) {
    
    e.preventDefault();
    makeGrid();
});