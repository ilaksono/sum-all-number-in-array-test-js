const sumItems = (array) => {
  return array.reduce((a, element) => {
    if (Array.isArray(element))
      return sumItems(element) + a;
    else
      return element + a;
  }, 0);
  //
  // sum = 0;

  // for (let a of array) {
  //   if(Array.isArray(a))
  //     sum = sumItems(a);
  //   else
  //     sum += a;
  // }
  // return sum;
};
// console.log(sumItems([1,2,3,[4,[[5]]]]));
console.log(sumItems([[1,2]]));

module.exports = sumItems;