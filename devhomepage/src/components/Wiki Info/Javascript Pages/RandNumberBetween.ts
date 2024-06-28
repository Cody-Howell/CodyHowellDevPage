import { Content } from "../../_WikiData";

export const RandNumberBetween: Content = {
  primaryCode: [
    '/**',
    ' * @param {number} x - Start value',
    ' * @param {number} y - End value',
    ' */',
    'function randNumberBetween(x, y) {',
    '  return Math.floor(Math.random() * (y - x)) + x;',
    '}'
  ],
  paragraphs: [
    `A function to retrieve a random integer between two values (and although x is implied < y, it works either way). 
    Y is not inclusive, so the values you get are between X and Y - 1. It works with negatives too. `,
    `The comments above the function are JSDoc notation that appear whenever you write a call to the function. It can help 
    in ensuring you pass in all the proper parameters to the function. `
  ],
  seeSimilar: [],
  externalLinks: []
}