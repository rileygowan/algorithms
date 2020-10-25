'use strict';
var twoSum = function (nums, target) {
  var indices = new Map();
  return nums.reduce(function (result, number, index) {
    var remainder = target - number;
    var storedIndex = indices.get(remainder);
    if (storedIndex >= 0) {
      return [storedIndex, index];
    } else {
      indices.set(number, index);
    }
    return result;
  }, []);
};
