function singleNumber(nums) {
  const map = new Map();
  for (let num of nums) {
    if (map.has(num)) {
      map.delete(num);
    } else {
      map.set(num, true);
    }
  }
  return [...map.keys()][0];
}
