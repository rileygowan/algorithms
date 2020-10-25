/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (hash[target - num] !== undefined) {
      return [hash[target - num], i];
    }
    hash[num] = i;
  }
  return [];
};

// const twoSum = (nums, target) => nums.reduce(twoSumReducer(target), []);
// const twoSumReducer = (target) => (result, current, index, nums) => {
//   if (result.length) return result;
//   const remainder = target - current;
//   if (nums.indexOf(remainder) > -1 && nums.indexOf(remainder) !== index) {
//     return [nums.indexOf(remainder), index];
//   }
//   return result;
// };
