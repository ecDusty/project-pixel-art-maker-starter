

function makeGrid() {
    //Get the Values & elements
    const gHeight = parseInt(document.getElementById('inputHeight').value);
    const gWidth = parseInt(document.getElementById('inputWidth').value);
    const pColor = document.getElementById('colorPicker');
    const pixCanvas = document.getElementById('pixelCanvas');

    //Reset the Canvas
    pixCanvas.innerHTML = '';

    //Function that sets background color
    function setColor(el) {
        this.style.backgroundColor = pColor.value;
    }

    //This makes sure the canvas is mobile responsive
    pixCanvas.style.maxWidth = (gWidth * 20 + gWidth + 1) + `px`;
    pixCanvas.style.width = `100%`;

    //Create the pixel blocks.
    let i = 0;
    while (i < gHeight) {
        let pixRow = document.createElement('div');
        pixRow.className = 'pixRow';

        for(let ii = 0; ii < gWidth; ii++) {
            let pixBlock = document.createElement('div');
            pixBlock.className = 'pixBlock';
            pixBlock.addEventListener('click',setColor);
            pixRow.appendChild(pixBlock);
        }

        pixCanvas.appendChild(pixRow);
        i++
    }

}


// Grab the action button, and link it to making the grid. Always make sure to prevent default, so the page doesn't reload.
const button = document.getElementById('Submit');
button.addEventListener('click', function(e) {
    
    e.preventDefault();
    makeGrid();
});