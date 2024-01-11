const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let count = 0;

const binarySearch = (arr, item) => {
  let start = 0;
  let end = arr.length;
  let middle;
  let found = false;
  let position = -1;

  while (found === false && start <= end) {
    count += 1;
    middle = Math.floor((start + end) / 2);
    console.log(start, "-start", end, "- end", middle , "-middle")

    if (arr[middle] === item) {
      found = true;
      position = middle;

      return position;
    }

    if (item < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  return position;
}

console.log("Your element index is:", binarySearch(array, 21), "Number of iterations:", count);
console.log(array.indexOf(21))
