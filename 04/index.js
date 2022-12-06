// Part 1
document.body.innerText
  .split("\n")
  .filter((x) => x.length > 0)
  .map((x) => x.split(",").map((y) => y.split("-").map((z) => +z)))
  .map(([a, b]) => {
    const ar = a[1] - a[0];
    const br = b[1] - b[0];
    const [l, s] = ar > br ? [a, b] : [b, a];
    return s[0] >= l[0] && s[0] <= l[1] && s[1] <= l[1] && s[1] >= s[0];
  })
  .reduce((p, c) => p + (c ? 1 : 0), 0);

// Part 2
document.body.innerText
  .split("\n")
  .filter((x) => x.length > 0)
  .map((x) => x.split(",").map((y) => y.split("-").map((z) => +z)))
  .map(
    ([a, b]) =>
      // I know there must be a smarter way to do this..
      (a[0] >= b[0] && a[0] <= b[1]) ||
      (a[1] >= b[0] && a[1] <= b[1]) ||
      (b[0] >= a[0] && b[0] <= a[1]) ||
      (b[1] >= a[0] && b[1] <= a[1])
  )
  .reduce((p, c) => p + (c ? 1 : 0), 0);
