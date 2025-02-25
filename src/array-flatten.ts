function flattenArray(arr: any[]) {
    return arr.reduce(
        (acc: any, val: any) =>
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

function flatten(arr: any[]): any[] {
    const res: any[] = []
    arr.forEach((item) => {
        if (Array.isArray(item)) {
            res.concat(item)
        }
        res.push(arr)
    })
    return res
}

// 示例用法
const flattenArr = flatten(nestedArray)
console.log(flattenArr) // 输出: [1, 2, 3, 4, 5, 6]
//统计数组中每个元素出现的次数
const names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"]
const namesTimes = names.reduce<Record<string, number>>((acc, cur) => {
    if (cur in acc) {
        acc[cur]++
    } else {
        acc[cur] = 1
    }
    return acc
}, {})

console.log(namesTimes, "namesTimes")

// 数组去重
const numbers = [1, 2, 2, 3, 4, 4, 5]
const uniqueNumbers = numbers.reduce<number[]>((acc, curr) => {
    if (!acc.includes(curr)) {
        acc.push(curr)
    }
    return acc
}, [])

// 数组去重
function getUniqueNumbers(numbers: any[]): number[] {
    // 类型检查，确保输入是一个数组
    if (!Array.isArray(numbers)) {
        throw new TypeError("Input must be an array")
    }

    // 处理空数组情况
    if (numbers.length === 0) {
        return []
    }

    // 使用 Set 去重
    return Array.from(new Set(numbers))
}

const uniqueSetNumbers = getUniqueNumbers(numbers)
console.log(uniqueSetNumbers, "uniqueSetNumbers") // 输出: [1, 2, 3, 4, 5]

console.log("uniqueNumbers", uniqueNumbers)

export { flattenArray }
