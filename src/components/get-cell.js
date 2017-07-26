'use strict';

/**
 * Gets the nominal cell index in the maze
 *
 * @param      {Array}  cellXY   The cell xy coordinates
 * @param      {number}  mazeWidth  The width of the maze
 * @return     {number}  { the nominal index of the cell in the maze }
 */
var getCellIndex = function (cellXY, mazeWidth) {
  return (cellXY[0] * mazeWidth) + cellXY[1];
};

/**
 * { function_description }
 *
 * @param      {Array}  matrix  The matrix
 * @param      {Array}  cellXY  The cell xy
 * @return     {Object}  { description_of_the_return_value }
 */
var getCellData = function (matrix, cellXY) {
  return matrix[cellXY[0]][cellXY[1]];
};

module.exports = {
  index: getCellIndex,
  data: getCellData
};
