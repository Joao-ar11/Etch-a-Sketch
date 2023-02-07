let squareQuantity = 16;
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
