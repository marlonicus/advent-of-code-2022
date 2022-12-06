// Run in the browser console of the input tab (F12)

/**
 * Part 1
 */
document.body.innerText
  .split("\n\n")
  .map((x) => x.split("\n"))

  .map((x, i) => {
    if (i === 0) {
      const cols = 9;
      // Parse stack into arrays
      return x
        .map((y, i) =>
          new Array(cols).fill(0).map((_, index) => y.charAt(1 + index * 4))
        )
        .reduce(
          (p, _, i, a) => {
            // Skip the label row
            if (i === 0) return p;

            const index = a.length - i - 1;

            for (let j = 0; j < cols; j++) {
              p[j].push(a[index][j]);
            }

            return p;
          },
          new Array(cols).fill(0).map((_) => [])
        )
        .map((y) => y.filter((z) => z != " "));
    } else {
      // Parse instructions [amount, from, to]
      return x
        .filter((x) => x != "")
        .map((y) => y.match(/\d+/gm).map((z) => +z));
    }
  })

  // Now we have arrays of stacks, and arrays of instructions
  .reduce((p, _, i, [st, ins]) => {
    // Sue me
    if (i === 0) {
      for (let i = 0; i < ins.length; i++) {
        const [amount, from, to] = ins[i];

        // Run the instructions
        for (let j = 0; j < amount; j++) {
          st[to - 1].push(st[from - 1].pop());
        }
      }

      // Take the top of each stack and join it
      return st
        .reduce((p, c) => {
          p.push(c[c.length - 1]);
          return p;
        }, [])
        .join("");
    }

    return p;
  }, "idk");

/**
 * Part 2
 */
document.body.innerText
  .split("\n\n")
  .map((x) => x.split("\n"))

  .map((x, i) => {
    if (i === 0) {
      const cols = 9;
      // Parse stack into arrays
      return x
        .map((y, i) =>
          new Array(cols).fill(0).map((_, index) => y.charAt(1 + index * 4))
        )
        .reduce(
          (p, _, i, a) => {
            // Skip the label row
            if (i === 0) return p;

            const index = a.length - i - 1;

            for (let j = 0; j < cols; j++) {
              p[j].push(a[index][j]);
            }

            return p;
          },
          new Array(cols).fill(0).map((_) => [])
        )
        .map((y) => y.filter((z) => z != " "));
    } else {
      // Parse instructions [amount, from, to]
      return x
        .filter((x) => x != "")
        .map((y) => y.match(/\d+/gm).map((z) => +z));
    }
  })

  // Now we have arrays of stacks, and arrays of instructions
  .reduce((p, _, i, [st, ins]) => {
    // Sue me
    if (i === 0) {
      for (let i = 0; i < ins.length; i++) {
        const [amount, from, to] = ins[i];

        // Run the instructions
        // Could probably have done this with an extra .reverse() for part 1.
        st[to - 1].push(...st[from - 1].splice(st[from - 1].length - amount));
      }

      // Take the top of each stack and join it
      return st
        .reduce((p, c) => {
          p.push(c[c.length - 1]);
          return p;
        }, [])
        .join("");
    }

    return p;
  }, "idk");
