// Run in the browser console of the input tab (F12)

// Part 1
document.body.innerText
  .split("\n")
  .map((x) => [x.slice(0, x.length / 2), x.slice(x.length / 2)])
  .filter((x) => x[0].length > 0)
  .reduce((prev, [a, b]) => {
    for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < b.length; j++) {
        if (a[i] === b[j]) return [...prev, a[i]];
      }
    }
  }, [])
  .reduce((p, c) => {
    const alpha = "abcdefghijklmnopqrstuvwxyz";
    const al = alpha.indexOf(c);
    const au = alpha.toUpperCase().indexOf(c);
    return 1 + (al > -1 ? p + al : p + au + alpha.length);
  }, 0);

// Part 2
document.body.innerText
  .split("\n")
  .filter((x) => x[0] != null && x[0].length > 0)
  .reduce(
    ([p, f], c) => {
      const np = f === 0 ? [...(p ?? []), []] : p;
      np[np.length - 1].push(c);
      return [np, f >= 2 ? 0 : f + 1];
    },
    [[], 0]
  )
  .filter((x) => typeof x != "number")
  .flat()
  .reduce((prev, [a, b, c]) => {
    for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < b.length; j++) {
        for (let k = 0; k < c.length; k++) {
          if (a[i] === b[j] && b[j] === c[k]) return [...prev, a[i]];
        }
      }
    }
  }, [])
  .reduce((p, c) => {
    const alpha = "abcdefghijklmnopqrstuvwxyz";
    const al = alpha.indexOf(c);
    const au = alpha.toUpperCase().indexOf(c);
    return 1 + (al > -1 ? p + al : p + au + alpha.length);
  }, 0);
