function getRandomNumber() {
    return Math.floor(Math.random() * 256)
}

function createNormalSketchBook(squareQuantity) {
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

function setColorToNormal() {
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        square.removeEventListener("mouseover", () => {
            square.style.backgroundColor = `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`
        });
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = `#000000`;
        })
    });
}

function setColorToRandom() {
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        square.removeEventListener("mouseover", () => square.style.backgroundColor = "#000000");
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`;
        })
    });
}

function destroySketchBook() {
    const sketchBook = document.querySelector("#sketchBook");
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => sketchBook.removeChild(square));
}

let sketchType = "normal";
let squareQuantity = 16;
createNormalSketchBook(squareQuantity);
const squareQuantityButton = document.querySelector("#squareQuantity");
const randomColor = document.querySelector("#randomColor");
squareQuantityButton.addEventListener("click", () => {
    let keepGoing = true;
    while(keepGoing){
        squareQuantity = +prompt("Type quantity of squares on each line (max 100)");
        if (squareQuantity <= 100) {
            keepGoing = false;
        } else {
            alert("Please, no numbers higher than 100.")
        }
    }
    destroySketchBook();
    createNormalSketchBook();
})
randomColor.addEventListener("change", () => {
    if (randomColor.checked) {
        setColorToRandom();
        sketchType = "random";
    } else {
        setColorToNormal();
        sketchType = "normal";
    }
});
const clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
    destroySketchBook();
    createNormalSketchBook(squareQuantity);
});