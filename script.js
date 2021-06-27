const container = document.getElementById("container");

function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (let c = 0; c < (rows * cols); c++) {
      let cell = document.createElement("div");
      container.appendChild(cell).className = "grid-item";
    };
    const gridItem = document.getElementsByClassName("grid-item");
    for (let i = 0; i < gridItem.length; i++) {
        gridItem[i].addEventListener("mouseover", function(){
            gridItem[i].style.backgroundColor = `rgb(${randNum()},${randNum()},${randNum()})`;
    });
}
};
function randNum() {
    return Math.floor(Math.random() * 256);
}

makeRows(16, 16);


let button = document.getElementById("reset");
button.addEventListener("click", newGrid);

function newGrid() {
        while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
    let rowsInput = prompt("How many rows?");
    let colInput = prompt("How many columns?");
    let rowsInt = parseInt(rowsInput);
    let colInt = parseInt(colInput);
    if (rowsInt > 70 || colInt > 70) {
        alert("The input was too high");
    } else {
        makeRows(rowsInt, colInt);
    }
}
