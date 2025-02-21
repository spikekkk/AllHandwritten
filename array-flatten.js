function flattenArray(arr) {
    return arr.reduce(
        (acc, val) =>
            Array.isArray(val)
                ? acc.concat(flattenArray(val))
                : acc.concat(val),
        []
    )
}

// 示例用法
const nestedArray = [1, [2, [3, 4], 5], 6]
const flatArray = flattenArray(nestedArray)
console.log(flatArray) // 输出: [1, 2, 3, 4, 5, 6]
