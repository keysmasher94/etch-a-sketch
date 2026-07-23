/* TODO:
 * - Create a 16x16 set of divs
 * - Use flexbox (in css) to make the divs appear as a grid
 * - Set up a hover effect so the grid divs change colour when the mouse goes
 *   past them
 * - Add a button at the top that sends the user a popup asking for the number
 *   of squares per side for the new grid; oncd entered the existing grid will be
 *   removed and a new grid will be created in the same space (set a maximum of
 *   100)
 *   - have the colours be random color values for each square; plus darkening
 */

/* Create Grid of Squares */
const container = document.querySelector(".container");

function createGrid(gridSquares, maximum = 100) {
  if (gridSquares <= maximum) {
    for (let i = 0; i < gridSquares; i++) {
      const rowSquare = document.createElement("div");
      rowSquare.className = "rowSquare";
      for (let j = 0; j < gridSquares; j++) {
        const colSquare = document.createElement("div");
        colSquare.className = "colSquare";
        rowSquare.appendChild(colSquare);
      }
      container.appendChild(rowSquare);
    }
  } else {
    alert(`Too many squares, please enter a number less than ${maximum}`);
  }
}

createGrid(8);
