/* TODO:
 * - Set up a hover effect so the grid divs change colour when the mouse goes
 *   past them
 * - Add a button at the top that sends the user a popup asking for the number
 *   of squares per side for the new grid; oncd entered the existing grid will be
 *   removed and a new grid will be created in the same space (set a maximum of
 *   100)
 *   - have the colours be random color values for each square; plus darkening
 */

// TODO:
// - Fix margins: they work up until about 60, but then break down after that;
// they also look a bit too spaced out when you get below 15

/* Create Grid of Squares */
const container = document.querySelector(".container");

function createGrid(gridSquares, maximum = 100) {
  if (gridSquares <= maximum) {
    for (let i = 0; i < gridSquares; i++) {
      const rowSquare = document.createElement("div");
      /* Modifying div attributes */
      rowSquare.style.height = "100%";
      rowSquare.style.width = "100%";
      rowSquare.style.margin = `${30 / gridSquares}px`;
      rowSquare.className = "rowSquare";
      for (let j = 0; j < gridSquares; j++) {
        const colSquare = document.createElement("div");
        colSquare.className = "colSquare";
        /* Modifying div attributes */
        colSquare.style.width = "100%";
        colSquare.style.height = "100%";
        colSquare.style.margin = `${30 / gridSquares}px`;
        rowSquare.appendChild(colSquare);
      }
      container.appendChild(rowSquare);
    }
  } else {
    alert(`Too many squares, please enter a number less than ${maximum}`);
  }
}

createGrid(15);
