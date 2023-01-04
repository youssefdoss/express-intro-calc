'use strict';

const { BadRequestError } = require("./expressError");


/** Convert strNums like ["1","2","3"] to [1, 2, 3]. */

function convertStrNums(strNums) {
  // if the conversion isn't successful, throw a BadRequestError and will
  // be handled in your route
  let numNums = [];

  for (let i = 0; i < strNums.length; i++) {
    const numNum = Number(strNums[i]);

    if (isNaN(numNum)) {
      throw new BadRequestError(`${strNums[i]} is not a number`);
    }

    numNums.push(numNum);
  }

  return numNums;
}


module.exports = { convertStrNums };