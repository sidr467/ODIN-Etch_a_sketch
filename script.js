document.addEventListener('DOMContentLoaded', function(){
    //const size = prompt("Enter the size :");
    createEtchSketch(3);
});

function createEtchSketch(size) {
    const board = document.querySelector('#etch-sketch');

    board.style.gridTemplateColumns = `repeat(${size},1fr)`;
    board.style.gridTemplateRows = `repeat(${size},1fr)`;

    for (let i = 0; i < size * size; i++) {
        let pixel = document.createElement("div");
        //pixel.style.backgroundColor = 'yellow';
        board.insertAdjacentElement("beforeend", pixel);
        pixel.className = 'pixel';
        pixel.addEventListener('mouseover', colorPixel);
        
    }
}

function colorPixel() {
    this.style.backgroundColor = '#333';
}

function clear() {
    const pixels = document.querySelectorAll('pixel');
    pixels.forEach(pixel => pixel.style.backgroundColor = '');
}

