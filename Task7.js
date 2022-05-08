// Задание 7

// Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно.
// При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.

const arr = [1, 7, 0, 'hello', 38, 3, 14, 9, 89, null]
let sumOdd = 0;
let sumEven = 0;
let sumZero = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
        sumZero += 1
    } else if (typeof(arr[i]) !== 'number') {
        console.log(`This is not a number: ${arr[i]}`)
    } else if (arr[i] % 2 === 0) {
        sumEven += 1
    } else {
        sumOdd +=1
    }
}

console.log(`There are ${sumEven} even numbers`);
console.log(`There are ${sumOdd} odd numbers`);
console.log(`There are ${sumZero} zeros`);