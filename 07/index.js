// Copy, paste and run in the console of the input page (F12)

(() => {
  let _id = 0;

  // Node type
  const node = ({
    id = `${_id++}`,
    name,
    size = 0,
    children = [],
    parent = null,
  }) => ({
    id,
    name,
    size,
    children,
    parent,
  });

  // Root node
  const root = node({ name: "root" });

  // Parse the log
  const log = document.body.innerText //
    .split("\n")
    .filter((x) => x != "");

  // Reference of the current node we're looking at
  let cwd = root;

  // Build tree
  for (let i = 0; i < log.length; i++) {
    const [, command, target] = log[i].split(" ");

    switch (command) {
      case "cd":
        // Go to root
        if (target === "/") cwd = root;
        // Go up a dir
        else if (target == "..") cwd = cwd.parent || root;
        // Go to a specific dir
        else cwd = cwd.children.find(({ name }) => name === target);
        break;

      case "ls":
        // Loop through the lines until we reach the next command (and we still have lines to process)
        while (log[i + 1] && !log[i + 1].startsWith("$")) {
          i++;

          const [typeOrSize, name] = log[i].split(" ");

          cwd.children.push(
            node({
              name,
              size: typeOrSize === "dir" ? 0 : +typeOrSize,
              parent: cwd,
            })
          );
        }
        break;
    }
  }

  // We have the tree, now calculate all dir sizes
  const visited = new Set(); // { id }
  const totals = new Map(); // { id: size }
  let calculating = true;
  cwd = root;

  while (calculating) {
    // Get size of all files in this dir
    const sizeOfChildFiles = cwd.children.reduce((p, { size }) => p + size, 0);

    if (!visited.has(cwd.id)) {
      // Mark this dir as visited
      visited.add(cwd.id);

      // Set initial size with any files in this dir
      totals.set(cwd, sizeOfChildFiles);

      // Update all parent directories with this additional size
      let parent = cwd.parent;
      while (parent) {
        totals.set(parent, totals.get(parent) + sizeOfChildFiles);
        parent = parent.parent;
      }
    }

    // Pick an unvisited directory
    const unvisited = cwd.children.filter(
      ({ id, size }) => size === 0 && !visited.has(id)
    );

    // Onto the next
    if (unvisited.length > 0) {
      cwd = unvisited[0];
    }
    // Nothing more to visit
    else {
      if (cwd.id === "0") {
        calculating = false;
      } else {
        cwd = cwd.parent;
      }
    }
  }

  /**
   * Part 1
   */
  let tally = 0;
  const p1 = new Map();

  // Filter the ones we want
  totals.forEach((value, key) => {
    if (value <= 100000) p1.set(key, value);
  });
  // Tally them up
  p1.forEach((value) => (tally += value));

  console.log("Part 1: ", tally);

  /**
   * Part 2
   */
  let p2Target;
  const totalUsed = totals.get(root);
  const totalAvailable = 70000000 - totalUsed;
  const totalNeeded = 30000000 - totalAvailable;
  totals.forEach((value) => {
    if (value >= totalNeeded && (p2Target == null || value < p2Target)) {
      p2Target = value;
    }
  });

  console.log("Part 2: ", p2Target);
})();
