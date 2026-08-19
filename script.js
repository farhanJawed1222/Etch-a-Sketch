// ---------------------------------------Reference----------------------------------------
const grid_container = document.querySelector(".grid__container");
const grid_slider = document.querySelector(".grid__slider");
const clean_btn = document.querySelector(".clean__btn");
//-------------------------------------variable-------------------------------------------

//-------------------------------------function--------------------------------------------
function getRandomColor(e) {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    e.target.style.background = `rgb(${red}, ${green}, ${blue})`;
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

            grid.addEventListener("mouseenter", getRandomColor);

        }
    }
}

//function to  generate grid dynamically based on user input
function sketchPad() {
    let totalGrid = grid_slider.value;

    totalGrid = Number(totalGrid);

    // check for invalid or out-of-range input
    if (!totalGrid || totalGrid < 1 || totalGrid > 100) {
        alert("Enter number between 1 and 100");
        return;
    };
    buildGrid(totalGrid);
}

//add clean board function
function cleanSketch() {
    buildGrid(Number(grid_slider.value));
}

//--------------------------------Event Listener-----------------------------------------
grid_slider.addEventListener("change", sketchPad);
clean_btn.addEventListener("click", cleanSketch);

buildGrid(Number(grid_slider.value));