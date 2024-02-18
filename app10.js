// Я не до конца понял задание, нужно прям обнулить остальные элементы или удалить их, предоставляю два решения
// Решение 1 (обнуление)
// let arr = [
//   16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
//   76, -4, 12, -35, 4, 47,
// ];
// let maxElemnt = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > maxElemnt) {
//     maxElemnt = arr[i];
//   }
// }
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] !== maxElemnt) {
//     arr[i] = 0;
//   }
// }
// document.write(`An array with zeroed elements except for the largest one: <br>`);
// document.write(arr.join(`, `));
// Решение 2 (удаление)
// let arr = [
//     16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
//     76, -4, 12, -35, 4, 47,
// ];
// let maxIndex = 0;
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > arr[maxIndex]) {
//         maxIndex = i;
//     }
// }
// arr.splice(0, maxIndex);
// arr.splice(1);
// document.write(`Array with deleted elements except for the largest one: <br>`)
// document.write(arr.join(`, `))