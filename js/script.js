'use strict'

//1. Напишіть функційний вираз add, який приймає два числа і повертає їх суму. Використайте цей вираз, щоб додати числа 5 і 7.
// let add = function(num1, num2){
//     let result = num1 + num2;
//     console.log(`Сума чисел ${num1} та ${num2}: ${result}`);
// };
// add(5, 7)

//2. Напишіть функційний вираз subtract, який приймає два числа і повертає їх різницю. Використайте цей вираз, щоб відняти число 10 від числа 15.
// let subtract = function(num1, num2){
//     let result = num1 - num2;
//     console.log(`Різниця чисел ${num1} та ${num2}: ${result}`);
// };
// subtract(15, 10);

//3. Напишіть функційний вираз multiply, який приймає два числа і повертає їх добуток. Використайте цей вираз, щоб перемножити числа 3 і 4.
// const multiply = function(num1, num2){
//     let result = num1 * num2;
//     console.log(`Добуток чисел ${num1} та ${num2} дорівнює: ${result}`);
// };
// multiply(3, 4);

//4. Напишіть функційний вираз divide, який приймає два числа і повертає результат ділення першого числа на друге. Використайте цей вираз, щоб розділити число 20 на число 5.

// const divide = function(num1, num2){
//     let result = num1 / num2;
//     console.log(`Результат ділення чисел ${num1} та ${num2} дорівнює: ${result}`);
// };
// divide(20, 5)

//5. Напишіть функційний вираз calculate, який приймає два числа і операцію (+, -, *, /) і виконує відповідну математичну операцію над числами. Використайте цей вираз, щоб обчислити вираз "5 * 3".
// let calculate = function(num1, num2, operation){
//     switch (operation) {
//         case '+':
//             return num1 + num2;
//         case '-':
//             return num1 - num2;
//         case '*':
//             return num1 * num2;
//         case '/':
//             return num1 / num2;
//         default:
//             return 'Некоректний оператор'
//     }
// };
// console.log(`Результат операції: ${calculate(5, 3, '*')}`);

//6. Напишіть функційний вираз isPositive, який приймає число і повертає true, якщо число є додатним, і false, якщо число є від'ємним або нулем. Використайте цей вираз, щоб перевірити, чи є число 8 додатним.

// let isPositive = function(num){
//     return num > 0
// };
// console.log(isPositive(8));

//7. Напишіть функційний вираз isEven, який приймає число і повертає true, якщо число парне, і false, якщо число непарне. Використайте цей вираз, щоб визначити, чи є число 12 парним.
// let isEven = function(num){
//     return num % 2 === 0;
// };
// console.log(isEven(12));

//8. Напишіть функційний вираз getGreeting, який приймає ім'я і повертає рядок з привітанням, наприклад, "Привіт, Іван".
// let getGreeting = function(name){
//     return 'Привіт, ' + name
// };
// console.log(getGreeting('Іван'));

//9. Напишіть функційний вираз getCircleArea, який приймає радіус кола і повертає його площу. Використайте цей вираз, щоб обчислити площу кола з радіусом 5.

// let getCircleArea = function(radius){
//     return 3.14 * (radius ** 2);
// }
// console.log('Радіус кола дорівнює: ' + getCircleArea(5));

//10. Напишіть функційний вираз calculateBMI, який приймає вагу (у кілограмах) та зріст (у метрах) і повертає ІМТ (індекс маси тіла). Використайте цей вираз, щоб обчислити ІМТ для особи з вагою 70 кг та зростом 1.75 м.
// let calculateBMI = function(weight, height){
//     return weight / (height ** 2);
// };
// console.log('Індекс маси тіла дорівнює: ' + calculateBMI('70', '1.75').toFixed(2));