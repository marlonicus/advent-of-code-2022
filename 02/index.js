// Run in the browser console of the input tab (F12)

// Part 1
document.body.innerText
    .split('\n')
    .map(x => x.split(' '))
    .filter(x => x != '')
    .map(([atk, def]) => ['ABC'.indexOf(atk), 'XYZ'.indexOf(def)])
    .reduce((score, [atk, def]) => {
        
        // A = rock, B = paper, C = scissors
        // X = rock, Y = paper, Z = scissors
        // 0 = lose, 1 = draw, 2 = win
        //
        //   A B C
        // X 1 0 2
        // Y 2 1 0
        // Z 0 2 1
        
        const result = [[1, 0, 2], [2, 1, 0], [0, 2, 1]][def][atk]
        const resultScore = result * 3
        return resultScore + def + 1 + score
    }, 0)


// Part 2
document.body.innerText
    .split('\n')
    .map(x => x.split(' '))
    .filter(x => x != '')
    .map(([atk, def]) => ['ABC'.indexOf(atk), 'XYZ'.indexOf(def)])
    .reduce((score, [atk, def]) => {
        
        // A = rock, B = paper, C = scissors
        // X = lose, Y = draw, Z = win
        // 0 = lose, 1 = draw, 2 = win
        //
        //   A B C
        // X 3 1 2
        // Y 1 2 3
        // Z 2 3 1
        
        const result = [[3, 1, 2], [1, 2, 3], [2, 3, 1]][def][atk]
        return result + (def * 3) + score
    }, 0)
