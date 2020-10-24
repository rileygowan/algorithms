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
