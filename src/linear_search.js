const array = [1, 4, 5, 8, 12, 47, 10, 3, 6, 11]; // Массив рандомных чисел
let count = 0;

/** 
 * Поиск происходит линейно, путем прохождения последовательно по всем элементам массива и сравниванию с искомым значением.
 * Сложность алгоритма O(n).
*/


const linearSearch = (arr, item) => {
  for (let i = 0; i < arr.length; i++) {
    count += 1;
    if (arr[i] === item) {
      return i;
    }
  }

  return null;
}

console.log("Your element index is:", linearSearch(array, 12), "Number of iterations:", count);
