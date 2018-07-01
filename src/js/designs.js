// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

// Your code goes here!
    const gHeight = $('#inputHeight').val();
    const gWidth = $('#inputWidth').val();

}

$('form input[type="submit"]').click(function(e) {
    e.preventDefault();
    makeGrid();
});