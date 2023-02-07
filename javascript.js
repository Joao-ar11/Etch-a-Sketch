function createSketchBook(squareQuantity) {
    const sketchBook = document.querySelector("#sketchBook");
    for (let i = 0; i < Math.pow(squareQuantity, 2); i++) {
        const square = document.createElement("div");
        square.classList.toggle("square")
        square.style.backgroundColor = "#ffffff";
        square.style.height = `${960 / squareQuantity}px`;
        square.style.width = `${960 / squareQuantity}px`;
        square.addEventListener("mouseover", () => square.style.backgroundColor = "#000000");
        sketchBook.appendChild(square);
    }
}

function destroySketchBook() {
    const sketchBook = document.querySelector("#sketchBook");
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => sketchBook.removeChild(square));
}

let squareQuantity = 16;
createSketchBook(squareQuantity);
const squareQuantityButton = document.querySelector("#squareQuantity");
squareQuantityButton.addEventListener("click", () => {
    squareQuantity = +prompt("Type quantity of squares on each line (max 100)");
    destroySketchBook();
    createSketchBook(squareQuantity);
})