// Copy, paste and run in the console of the input page (F12)

/**
 * Part 1
 */
(() => {
  let str = `30373
25512
65332
33549
35390`;

  let log = "";
  // Parse input into arrays
  const arr = document.body.innerText
    //   const arr = str
    .split("\n")
    .filter((x) => x != "")
    .map((x) => x.split("").map((y) => +y));
  log = arr;

  const visible = {}; // key: "x-y"

  const tagVisible = (x, y) => (visible[`${y}-${x}`] = true);

  // This function brought to you by our sponsor: StackOverflow
  function rotateCounterClockwise(a) {
    var n = a.length;
    for (var i = 0; i < n / 2; i++) {
      for (var j = i; j < n - i - 1; j++) {
        var tmp = a[i][j];
        a[i][j] = a[j][n - i - 1];
        a[j][n - i - 1] = a[n - i - 1][n - j - 1];
        a[n - i - 1][n - j - 1] = a[n - j - 1][i];
        a[n - j - 1][i] = tmp;
      }
    }
    return a;
  }

  // Check visible from left
  arr.forEach((row, y) => {
    row.reduce((highest, height, x) => {
      if (height > highest) {
        tagVisible(x, y);
        return height;
      } else {
        return highest;
      }
    }, -1);
  });

  // Check visible from right
  arr.forEach((row, y) => {
    row.reduceRight((highest, height, x) => {
      if (height > highest) {
        tagVisible(x, y);
        return height;
      } else {
        return highest;
      }
    }, -1);
  });

  const rotated = rotateCounterClockwise(arr);

  // Check visible from top
  rotated.forEach((row, y) => {
    row.reduce((highest, height, x) => {
      if (height > highest) {
        tagVisible(rotated.length - y - 1, x);
        return height;
      } else {
        return highest;
      }
    }, -1);
  });

  // Check from bottom
  rotated.forEach((row, y) => {
    row.reduceRight((highest, height, x) => {
      if (height > highest) {
        tagVisible(rotated.length - y - 1, x);
        return height;
      } else {
        return highest;
      }
    }, -1);
  });

  console.log(Object.keys(visible).length);

  // Useful for debugging
  //   console.log(
  //     arr.map((row, y) =>
  //       row.map((_, x) => {
  //         return visible[`${y}-${x}`] ? "x" : "-";
  //       })
  //     )
  //   );
})();
