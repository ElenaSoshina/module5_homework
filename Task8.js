// Задание 8

// Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».
//Используйте шаблонные строки.

let newMap = new Map();
newMap.set('Asus', '29000');
newMap.set('Aser', '35000');
newMap.set('Lenovo', '27900');

newMap.forEach((values, keys) => {
    console.log(`Ноутбук - ${keys}, Стоимость - ${values}`);
})