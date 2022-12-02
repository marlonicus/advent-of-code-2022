// Run in the console of the input page

// Part 1
document.body.innerText
    .split('\n\n')
    .map(x => x.split('\n'))
    .map(x => x.reduce((p, c) => +p + +c), 0)
    .map(x => +x)
    .reduce((p, c) => c > p ? c : p, 0)

// Part 2
document.body.innerText
    .split('\n\n')
    .map(x => x.split('\n'))
    .map(x => x.reduce((p, c) => +p + +c), 0)
    .map(x => +x)
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((p, c) => +p + +c, 0)
