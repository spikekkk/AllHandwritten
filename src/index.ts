import { flattenArray } from "./array-flatten"
const nestedArray = [1, [2, [3, 4], 5], 6]
const flatArray = flattenArray(nestedArray)
console.log(flatArray, "flattenArray") // 输出: [1, 2, 3, 4, 5, 6]
