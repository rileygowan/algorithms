const twoSum = (nums: number[], target: number): number[] => {
  const indices = new Map();
  return nums.reduce<number[]>((result, number, index) => {
    const remainder = target - number;
    const storedIndex = indices.get(remainder);
    if (storedIndex >= 0) {
      return [storedIndex, index];
    } else {
      indices.set(number, index);
    }
    return result;
  }, []);
};
