// 题目：找出数字中唯一的值

// 1. 遍历，依次删除，剩余项查不到时，即目标值
// for of 方法本身不提供 index，需要遍历 a.keys 或 a.entries，后者同时可以访问 value

const a = [1, 2, 3, 2, 1]

const copy = a.slice()
for (const [index, value] of copy.entries()) {
	delete copy[index]
	if (!copy.includes(value)) {
		console.log('got it', value)
		break
	}
}

