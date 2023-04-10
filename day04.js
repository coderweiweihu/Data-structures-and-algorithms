const map = new Map();

const keyString = "a string";
const keyObj = {};
const keyFunc = function () {};

// 添加键
map.set(keyString, "字符串");
map.set(keyObj, "对象");
map.set(keyFunc, "函数");

console.log(map.size); // 3

// 读取值
console.log(map.get(keyString)); // "字符串"
console.log(map.get(keyObj)); // "对象"
console.log(map.get(keyFunc)); // "函数"

// 读取值
console.log(map.get("a string")); // "字符串" 因为 keyString === 'a string'
console.log(map.get({})); // undefined 因为 keyObj !== {}
console.log(map.get(function () {})); // undefined 因为 keyFunc !== function() {}

> `NaN`也可以作为`Map`对象的键。虽然`NaN`与任何值甚至与自己都不相等（`NaN !== NaN` 返回 true）但是因为所有的`NaN`的值都是无法区分的，所以下面的案例成立：

const myMap = new Map();
myMap.set(NaN, "not a number");

// 读取键
console.log(myMap.get(NaN));
// "not a number"

const otherNaN = Number("foo"); // "NaN"
myMap.get(otherName);
// "not a number"

## 第 4 题 Map 可以使用 for...of 循环来实现迭代

const myMap = new Map();
myMap.set(0, "zero");
myMap.set(1, "one");

for (const [key, value] of myMap) {
  console.log(`${key} = ${value}`);
}
// 1 = zero
// 2 = one

for (const key of myMap.keys()) {
  console.log(key);
}
// 1
// 2

for (const value of myMap.values()) {
  console.log(value);
}
// zero
// one

for (const [key, value] of myMap.entries()) {
  console.log(`${key} = ${value}`);
}
// 1 = zero
// 2 = one

const map = new Map();
map.set("name", "weiwie");
map.set("age", 18);

map.forEach((value, key) => {
  console.log(value, key);
});
// "weiwei" "name"
// 18 "age"

const kvArray = [
  ["key1", "value1"],
  ["key2", "value2"],
];

// 使用常规的 Map 构造函数可以将一个二维键值对数组转换成一个 Map 对象
const myMap = new Map(kvArray);

console.log(myMap.get("key1")); // "value1"

// 使用 Array.from 函数可以将一个 Map 对象转换成一个二维键值对数组
console.log(Array.from(myMap)); // 输出和 kvArray 相同的数组

// 更简洁的方法来做如上同样的事情，使用展开运算符
console.log([...myMap]);

// 或者在键或者值的迭代器上使用 Array.from，进而得到只含有键或者值的数组
console.log(Array.from(myMap.keys())); // 输出 ["key1", "key2"]

// 获取所有值组成的数组
console.log(Array.from(myMap.values())); // 输出 ["value1", "value2"]

// 将map结构转换为二维数组
console.log(Array.from(myMap.entries()));
// 输出 [['key1', 'value1'], ['key2', 'value2']]


Map 对象间可以进行合并，但是会保持键的唯一性

const first = new Map([
  [1, "one"],
  [2, "two"],
  [3, "three"],
]);

const second = new Map([
  [1, "uno"],
  [2, "dos"],
]);

// 合并两个 Map 对象时，如果有重复的键值，则后面的会覆盖前面的。
// 展开语法本质上是将 Map 对象转换成数组。
const merged = new Map([...first, ...second]);

console.log(merged.get(1)); // uno
console.log(merged.get(2)); // dos
console.log(merged.get(3)); // three


Map 对象也能与数组合并：

const first = new Map([
  [1, "one"],
  [2, "two"],
  [3, "three"],
]);

const second = new Map([
  [1, "uno"],
  [2, "dos"],
]);

// Map 对象同数组进行合并时，如果有重复的键值，则后面的会覆盖前面的。
const merged = new Map([...first, ...second, [1, "eins"]]);

console.log(merged.get(1)); // eins
console.log(merged.get(2)); // dos
console.log(merged.get(3)); // three
