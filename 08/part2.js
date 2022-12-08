/**
 * Part 2
 */
(() => {
  let log = "";
  // Parse input into arrays
  const arr = document.body.innerText
    .split("\n")
    .filter((x) => x != "")
    .map((x) => x.split("").map((y) => +y));
  log = arr;

  let best = 0;
  const scores = [];
  console.log(arr, str);

  for (let y = 0; y < arr.length; y++) {
    scores.push([]);

    // Get left scores
    for (let x = 0; x < arr[y].length; x++) {
      const curTreeHeight = arr[y][x];
      scores[y].push([]);
      let blocked = false;
      let tx = x,
        ty = y,
        score = 0;

      // Left views
      while (!blocked) {
        tx--;
        if (arr[ty] != null && arr[ty][tx] != null) {
          score++;
          if (arr[ty][tx] >= curTreeHeight) blocked = true;
        } else {
          blocked = true;
        }
      }

      scores[y][x].push(score);

      // Right views
      tx = x;
      ty = y;
      score = 0;
      blocked = false;
      while (!blocked) {
        tx++;
        if (arr[ty] != null && arr[ty][tx] != null) {
          score++;
          if (arr[ty][tx] >= curTreeHeight) blocked = true;
        } else {
          blocked = true;
        }
      }

      scores[y][x].push(score);

      // Up views
      tx = x;
      ty = y;
      score = 0;
      blocked = false;
      while (!blocked) {
        ty--;
        if (arr[ty] != null && arr[ty][tx] != null) {
          score++;
          if (arr[ty][tx] >= curTreeHeight) blocked = true;
        } else {
          blocked = true;
        }
      }

      scores[y][x].push(score);

      // Down views
      tx = x;
      ty = y;
      score = 0;
      blocked = false;

      while (!blocked) {
        ty++;
        if (arr[ty] != null && arr[ty][tx] != null) {
          score++;
          if (arr[ty][tx] >= curTreeHeight) blocked = true;
        } else {
          blocked = true;
        }
      }

      scores[y][x].push(score);
    }
  }

  let highest = 0;
  for (let y = 0; y < scores.length; y++) {
    for (let x = 0; x < scores[y].length; x++) {
      let score = 1;
      for (let z = 0; z < scores[y][x].length; z++) {
        let cur = scores[y][x][z];
        score *= cur;
      }
      if (score > highest) {
        highest = score;
      }
    }
  }
  console.log(highest, scores, dx, dy);
})();
