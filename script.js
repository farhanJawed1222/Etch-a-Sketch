// ---------------------------------------Reference----------------------------------------
const grid_container = document.querySelector(".grid__container");
const start_btn = document.querySelector(".start__btn");
const clean_btn = document.querySelector(".clean__btn");
//-------------------------------------variable-------------------------------------------
// initial grid cell in each side
let currentSize = 50;
//-------------------------------------function--------------------------------------------
function getRandomColor(e) {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    e.target.style.background = `rgb(${red}, ${green}, ${blue})`
}

// building grids
function buildGrid(totalGrid) {
    // clearing older grid 
    grid_container.textContent = "";
    // dimension of each grid
    let width = 960 / totalGrid;
    let height = 960 / totalGrid;

    //create a sketchpad of different grid size
    for (let i = 0; i < totalGrid; i++) {
        for (let j = 0; j < totalGrid; j++) {
            let grid = document.createElement("div");
            grid.classList.add("grid");
            grid.style.width = width + 'px';
            grid.style.height = height + 'px';
            grid_container.appendChild(grid);

            // add random color on each grid on hovering
            grid.addEventListener("mouseover", getRandomColor);

        }
    }
}

//function to  generate grid dynamically based on user input
function sketchPad() {
    let totalGrid = prompt("Total grid per side? (max 100)");

    totalGrid = Number(totalGrid);

    // check for invalid or out-of-range input
    if (!totalGrid || totalGrid < 1 || totalGrid > 100) {
        alert("Enter number between 1 and 100");
        return;
    };
    currentSize = totalGrid;
    buildGrid(totalGrid);
}

//add clean board function
function cleanSketch() {
    buildGrid(currentSize);
}

//--------------------------------Event Listener-----------------------------------------
start_btn.addEventListener("click", sketchPad);
clean_btn.addEventListener("click", cleanSketch);

buildGrid(currentSize);