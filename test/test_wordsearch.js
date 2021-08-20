const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js');

describe("#wordSearch()", function() {
  it("should return false if the word is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK');

    assert.isFalse(result);
  });

  it("should return true if the word is present horizontally", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD');

    assert.isTrue(result);
  });

  it("should return true if the word is present vertically", function() {
    const result = wordSearch([
      ['A', 'S', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'J', 'A', 'L', 'D'],
      ['Y', 'I', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'N', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'F', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'E', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'L', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD');

    assert.isTrue(result);
  });

  it("should return true if the word is present horizontal backwards", function() {
    const result = wordSearch([
      ['A', 'S', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'J', 'A', 'L', 'D'],
      ['Y', 'I', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'N', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'Y', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'E', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'A', 'I', 'S', 'S', 'U', 'R', 'I'],
      ['O', 'H', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'RUSSIA');

    assert.isTrue(result);
  });

  it("should return true if the word is present vertical backwards", function() {
    const result = wordSearch([
      ['A', 'S', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'J', 'A', 'L', 'D'],
      ['Y', 'I', 'A', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'N', 'I', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'Y', 'S', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'E', 'S', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'A', 'U', 'S', 'S', 'U', 'R', 'I'],
      ['O', 'H', 'R', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'RUSSIA');

    assert.isTrue(result);
  });

  it("should return true if the word is present diagonal", function() {
    const result = wordSearch([
      ['A', 'S', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'J', 'A', 'L', 'D'],
      ['Y', 'A', 'A', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'N', 'P', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'Y', 'S', 'P', 'Y', 'E', 'R', 'L'],
      ['B', 'E', 'S', 'E', 'L', 'E', 'Y', 'B'],
      ['U', 'A', 'U', 'S', 'S', 'E', 'R', 'I'],
      ['O', 'H', 'R', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'APPLE');

    assert.isTrue(result);
  });

  it("should return true if the word is present diagonal and backwards", function() {
    const result = wordSearch([
      ['A', 'S', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'E', 'J', 'A', 'L', 'D'],
      ['Y', 'R', 'A', 'F', 'L', 'U', 'A', 'L'],
      ['H', 'N', 'P', 'T', 'E', 'P', 'R', 'G'],
      ['W', 'Y', 'S', 'T', 'Y', 'E', 'P', 'L'],
      ['B', 'E', 'S', 'E', 'L', 'Z', 'Y', 'A'],
      ['U', 'A', 'U', 'S', 'S', 'E', 'R', 'I'],
      ['O', 'H', 'R', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'APPLE');

    assert.isTrue(result);
  });

  it("should return true if the word is present backwards diagonal", function() {
    const result = wordSearch([
      ['A', 'S', 'C', 'F', 'Q', 'U', 'G', 'L'],
      ['S', 'E', 'I', 'E', 'J', 'N', 'L', 'D'],
      ['Y', 'R', 'A', 'F', 'I', 'U', 'A', 'L'],
      ['H', 'N', 'P', 'H', 'E', 'P', 'R', 'G'],
      ['W', 'Y', 'S', 'T', 'Y', 'E', 'P', 'L'],
      ['B', 'I', 'S', 'E', 'L', 'Z', 'Y', 'A'],
      ['F', 'A', 'U', 'S', 'S', 'E', 'R', 'I'],
      ['O', 'H', 'R', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FISHING');

    assert.isTrue(result);
  });

  it("should return true if the word is present backwards diagonal and backwards", function() {
    const result = wordSearch([
      ['A', 'S', 'C', 'F', 'Q', 'U', 'F', 'L'],
      ['S', 'E', 'I', 'E', 'J', 'I', 'L', 'D'],
      ['Y', 'R', 'A', 'F', 'S', 'U', 'A', 'L'],
      ['H', 'N', 'P', 'H', 'E', 'P', 'R', 'G'],
      ['W', 'Y', 'I', 'T', 'Y', 'E', 'P', 'L'],
      ['B', 'N', 'S', 'E', 'L', 'Z', 'Y', 'A'],
      ['G', 'A', 'U', 'S', 'S', 'E', 'R', 'I'],
      ['O', 'H', 'R', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FISHING');

    assert.isTrue(result);
  });


  it("should return false if no word specified for search", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], '');

    assert.isFalse(result);
  });

  it("should return false if no wordsearch matrix", function() {
    const result = wordSearch([], 'HELLO');

    assert.isFalse(result);
  });
});
