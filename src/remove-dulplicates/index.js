function removeDuplicates(obj) {

  for (let objKey in obj){

   obj[objKey] = [...new Set(obj[objKey])];
  }

  const tempObj = obj;
//loop1 through each element
  for (let objKey in obj) {
    obj[objKey].forEach(element => {
//loop 2
      for(let objKey2 in tempObj) {
        tempObj[objKey2].forEach(element2 => {

          if(element === element2 && objKey !=
             objKey2) {
            tempObj[objKey] = tempObj[objKey].filter(
              (value) => value !== element)
          }
        });
      };
    });
  }
  return tempObj
}

module.exports = removeDuplicates;

