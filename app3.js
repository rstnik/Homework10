let arr = [
    16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
    76, -4, 12, -35, 4, 47,
  ];
  let maxElemnt = arr[0];
  let maxIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxElemnt) {
      maxElemnt = arr[i];
      maxIndex = i;
    }
  }
  document.write(`Maximum element: ${maxElemnt} <br> Index: ${maxIndex}`)