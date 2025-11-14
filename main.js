function knightMoves ([xStart, yStart], [xEnd, yEnd]) {
    if (xStart < 0 | xStart > 7 | yStart < 0 | yStart > 7) {
        console.log("Error: Illegal start position");
        return;
    }
    if (xEnd < 0 | xEnd > 7 | yEnd < 0 | yEnd > 7) {
        console.log("Error: Illegal end position");
        return;
    }
    let start = new Node([xStart, yStart]);
    const end = new Node([xEnd, yEnd]);
    let queue = [start];
    let visitedSquares = [start];

    while (queue.length > 0) {
        let current = queue.shift()
        // console.log("current: ", current.position)

        if (current.position[0] == end.position[0] && current.position[1] == end.position[1]) {
            return constructPath(visitedSquares, current, start);
        }

        let nextMoves = getNextMoves(current.position);
        // console.log("next moves:", nextMoves)

        for (let pos of nextMoves) {
            let move = new Node(pos, current);
            if (!visited(visitedSquares, move)) {
                visitedSquares.push(move);
                queue.push(move);
            }
        }
    }

}

function getNextMoves ([xNode, yNode]) {
    let moves = [];

    // Check legal moves, add to move array
    if (xNode - 1 >= 0 && yNode + 2 <= 7) {
        moves.push([xNode - 1, yNode + 2]);
    }

    if (xNode - 2 >= 0 && yNode + 1 <= 7){
        moves.push([xNode - 2, yNode + 1]);
    } 

    if (xNode - 2 >= 0 && yNode - 1 >= 0){
        moves.push([xNode - 2, yNode - 1]);
    }

    if (xNode - 1 >= 0 && yNode - 2 >= 0){
        moves.push([xNode - 1, yNode - 2]);
    }

    if (xNode + 1 <= 7 && yNode - 2 >= 0){
        moves.push([xNode + 1, yNode - 2]);
    }

    if (xNode + 2 <= 7 && yNode + 1 <= 7){
        moves.push([xNode + 2, yNode + 1]);
    }

    if (xNode + 2 <= 7 && yNode + 1 <= 7){
        moves.push([xNode + 2, yNode + 1]);
    }

    if (xNode + 1 <= 7 && yNode + 2 <= 7){
        moves.push([xNode + 1, yNode + 2]);
    }

    return moves;
}

function visited (visitedSquares, move) {
    for (let node of visitedSquares) {
        if (node.position[0] == move.position[0] && node.position[1] == move.position[1]) {
            return true
        }
    }
    return false
}

function constructPath (visitedSquares, endNode, startNode) {
    let path = [];
    let current = endNode;
    let moveCount = -1; // Ignore starting square
    
    while (current != null) {
        path.push(current.position);
        current = current.parent;
        moveCount++
    }

    reversePath = []
    while (path.length != 0) {
        temp = path.pop()
        reversePath.push(temp)
    }

    console.log(`You made it in ${moveCount} moves! Here's your path:`)
    for (let move of reversePath) {
        console.log(move);
    }
    return reversePath
}

class Node {
    constructor (position = null, parent = null) {
        this.position = position;
        this.parent = parent;
    }
}

knightMoves([3,3],[4,3]);

knightMoves([0,0],[4,3]);

knightMoves([0,-1],[4,3]);

knightMoves([0,0],[4,9]);