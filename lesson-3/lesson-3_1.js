// Задание 1
// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.

// Решето Эратосфена

console.log('Урок 3. Задание 1');

const n = 100;
let nums = [];
for (let i = 0; i <= n; i++) {
    nums.push(i);
}

nums[1] = 0;
let primeNums = [];
let i = 2;
let j;

while (i <= n) {
    if (nums[i] !== 0) {
        primeNums.push(nums[i]);
        j = i;
        while (j <= n) {
            nums[j] = 0;
            j += i;
        }
    }
    i++;
}

console.log(primeNums);
