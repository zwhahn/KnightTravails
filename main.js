function knightMoves ([xStart, yStart], [xEnd, yEnd]) {
    let start = new Node([xStart, yStart]);
    const end = new Node([xEnd, yEnd]);
    let queue = [start];
    let visitedSquares = [start];

    while (queue.length > 0) {
        let current = queue.shift()
        // console.log("current: ", current.position)

        if (current.position[0] == end.position[0] && current.position[1] == end.position[1]) {
            console.log("Found Path")
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
    for (let node of visitedSquares) {
        if (node.position[0] == move.position[0] && node.position[1] == move.position[1]) {
            return true
        }
    }
    return false
}

function constructPath (visitedSquares, endNode, startNode) {
    let path = [endNode.position];
    let parentNode = endNode.parent;
    
    while (visitedSquares.length > 0) {
        let node = visitedSquares.shift()
        console.log('node.position: ', node.position);
        console.log('node.parent: ', node.parent);
        console.log('startNode.position: ', startNode.position);
        if (node.position[0] == parentNode.position[0] && node.position[1] == parentNode.position[1]) {
            path.push(node.position)
            if (node.parent == null) {
                console.log("END FOUND")
                path.push(node.position);
                break;
            }
        }
    }

    return path
}

class Node {
    constructor (position = null, parent = null) {
        this.position = position;
        this.parent = parent;
    }
}

console.log(knightMoves([3,3],[4,3]));