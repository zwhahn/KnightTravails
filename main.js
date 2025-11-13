function knightMoves ([xStart, yStart], [xEnd, yEnd]) {
    let start = new Node([xStart, xEnd]);
    const end = new Node([xEnd, yEnd]);
    let queue = [start];
    let visitedSquares = [start];

    while (queue.length > 0) {
        let current = queue.shift()
        // console.log("current: ", current.position)

        if (current.position == end.position) {
            // console.log("Found Path")
            return constructPath(current);
        }

        let nextMoves = getNextMoves(current.position);
        // console.log("next moves:", nextMoves)

        for (let pos of nextMoves) {
            let move = new Node(pos, current.position);
            if (!visited(visitedSquares, move)) {
                visitedSquares.push(move);
                queue.push(move);
            }
        }
    }

}

function getNextMoves ([xNode, yNode]) {
    let moves = [];

    // Check legal moves add to move array
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

    if (xNode + 2 <= 7 && yNode + 1 >= 0){
        moves.push([xNode + 2, yNode - 1]);
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
    for (node in visitedSquares) {
        if (node.position == move.position) {
            return true
        }
    }
    return false
}

class Node {
    constructor (position = null, parent = null) {
        this.position = position;
        this.parent = parent;
    }
}

knightMoves([3,3],[4,3])