// Global variable to see if a grid has been drawn
let existing = false;

/* Create Grid of Squares */
const container = document.querySelector(".container");

// XXX: This could probably be refactored into a couple of functions; 1 for
// making the divs and one for styling them
function createGrid(gridSquares, maximum = 100) {
  if (gridSquares <= maximum && existing === false) {
    for (let i = 0; i < gridSquares; i++) {
      const rowSquare = document.createElement("div");
      /* Modifying div attributes */
      rowSquare.style.height = "100%";
      rowSquare.style.width = "100%";
      rowSquare.style.margin = `${3.2 / gridSquares}em`;
      rowSquare.className = "rowSquare";
      for (let j = 0; j < gridSquares; j++) {
        const colSquare = document.createElement("div");
        colSquare.className = "colSquare";
        /* Modifying div attributes */
        colSquare.style.width = "100%";
        colSquare.style.height = "100%";
        colSquare.style.margin = `${3.2 / gridSquares}em`;
        let enterEvent = 0;
        colSquare.addEventListener("mouseenter", (e) => {
          if (enterEvent < 10) {
            enterEvent++;
          }
          colSquare.style.backgroundColor = randomColor(enterEvent);
          console.log(enterEvent);
        });
        rowSquare.appendChild(colSquare);
      }
      container.appendChild(rowSquare);
      existing = true;
    }
  } else if (gridSquares > maximum) {
    alert(`Too many squares, please enter a number less than ${maximum}`);
  }
}

/* Choose grid size and create grid */
const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  existing = false;
  let maximum = prompt("How many squares would you like?");
  createGrid(maximum);
});

/* Set a random colour */
function randomColor(opacity) {
  const hue = Math.floor(Math.random() * 3600) / 10;
  const saturation = Math.floor(Math.random() * 1000) / 10;
  const light = Math.floor(Math.random() * 1000) / 10;
  // XXX: this could probably be done better than this
  if (opacity < 10) {
    return `hsl(${hue} 100% 55.5% / 0.${opacity})`;
  } else {
    return `hsl(${hue} 100% 55.5% / ${opacity})`;
  }
}
