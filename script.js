//Дан случайный массив чисел (создайте самостоятельно).
// С помощью метода .filter() отфильтруйте массив так, чтобы в новый массив вошли только четные двухзначные числа из исходного.

let array = [1, 23, 43, 34, 10, 19, 4, 5, 9, 88, 74];

const filteredArray = array.filter((item) => {
  if (item > 9 && item % 2 === 0) {
    return true;
  } else {
    return false;
  }
});
console.log(filteredArray);

// Пользователь вводит 10 случайных значений. Каждое значение необходимо записать в массив.
// С помощью метода .every() проверить были ли все введенные пользователем данные – числами.

let userInput;
let numbers = [];

for (let i = 0; i <= 9; i++) {
  userInput = prompt("Введите число", "");
  if (userInput === "" || isNaN(userInput) || userInput === null) {
    alert("Было введено не число");
    numbers.push(userInput);
  } else {
    numbers.push(Number(userInput));
  }

}
console.log(numbers);

let check = numbers.every(function (elem) {
  if (typeof elem == "number") {
    return true;
  } else {
    return false;
  }
});

console.log(check);

// Дан массив объектов

const arrNew = [
  { a: 2, b: 1 },
  { a: 5, b: 12 },
  { a: 95, b: 7 },
];

// Используя ТОЛЬКО методы массивов (циклы запрещены):
// Вывести в консоль 'its valid', если во всех объектах поле a > b, вывести 'its invalid' если хотя бы в одном объекте a<=b

const every = arrNew.every(item => item.a > item.b);

if (every){
  console.log('its valid');
 } else {
  console.log('its invalid');
 }

console.log(every);

// На основе массива arr, создать массив объектов у которых поле b возведено в квадрат пример:

const arr2 = arrNew.map((item) =>{
  return {
    ...item,
    b: item.b**2
  };
});

console.log(arr2);
