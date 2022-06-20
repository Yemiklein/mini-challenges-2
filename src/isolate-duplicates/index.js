// function isolateDuplicates(text) {}
// module.exports = isolateDuplicates;

const isolateDuplicates = (str) => {
  const arr = str.split('');
  const duplicateChars = [];
  const sortedArr = [arr].sort();

  sortedArr.forEach ((elem, index) => {
    if (sortedArr[index + 1] === elem) {
      duplicateChars.push(elem);
    }
  })
return duplicateChars;
}

//let duplicateChars = isolateDuplicates ('a,b,c,d,e,b,c,a');

console.log (isolateDuplicates ('abcacdbc'));
