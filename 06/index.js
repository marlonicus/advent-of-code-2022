// Run in the browser console of the input tab (F12)

// Took a crude approach here, I suspect there are better optimizations. Sliding windows?

/**
 * Part 1
 */
document.body.innerText
  .split("\n")
  .filter((x) => x != "")
  .map((x) => {
    const w = [];
    const wl = 4;
    let i, j;

    for (i = 0; i < x.length; i++) {
      let found = false;

      for (j = 0; j < wl; j++) {
        const m = x.slice(i, i + wl).match(new RegExp(x[i + j], "g"));

        if (m && m.length > 1) {
          found = true;
          break;
        }
      }

      if (!found) {
        return i + wl;
      }
    }
  });

/**
 * Part 2
 */
document.body.innerText
  .split("\n")
  .filter((x) => x != "")
  .map((x) => {
    const w = [];
    const wl = 14;
    let i, j;

    for (i = 0; i < x.length; i++) {
      let found = false;

      for (j = 0; j < wl; j++) {
        const m = x.slice(i, i + wl).match(new RegExp(x[i + j], "g"));

        if (m && m.length > 1) {
          found = true;
          break;
        }
      }

      if (!found) {
        return i + wl;
      }
    }
  });
