function twoSum(nums, target) {
  // 创建一个 Map 对象
  const map = new Map();
  // 遍历数组
  for (let i = 0; i < nums.length; i++) {
    // 计算差值
    const complement = target - nums[i];
    // 如果差值已经在 Map 中，说明找到了答案
    if (map.has(complement)) {
      // 返回答案
      return [map.get(complement), i];
    }
    // 将当前数值和下标存入 Map 中
    map.set(num[i], i);
  }
}
