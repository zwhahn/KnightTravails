function knightMoves ([xStart, yStart], [xEnd, yEnd]) {
    nextMoves = getNextMoves([xStart, yStart]);
}

function getNextMoves ([xNode, yNode]) {
    let moves = [];

    // Check legal moves add to move array
    if (xNode - 1 >= 0 && yNode + 2 <= 7) {
        moves.push([xNode - 1], (yNode + 2));
    }

    if (xNode - 2 >= 0 && yNode + 1 <= 7){
        moves.push([xNode - 2], (yNode + 1));
    } 

    if (xNode - 2 >= 0 && yNode - 1 >= 0){
        moves.push([xNode - 2], (yNode - 1));
    }

    if (xNode - 1 >= 0 && yNode - 2 >= 0){
        moves.push([xNode - 1], (yNode - 2));
    }

    if (xNode + 1 <= 7 && yNode - 2 >= 0){
        moves.push([xNode + 1], (yNode - 2));
    }

    if (xNode + 2 <= 7 && yNode + 1 >= 0){
        moves.push([xNode + 2], (yNode - 1));
    }

    if (xNode + 2 <= 7 && yNode + 1 <= 7){
        moves.push([xNode + 2], (yNode + 1));
    }

    if (xNode + 1 <= 7 && yNode + 2 <= 7){
        moves.push([xNode + 1], (yNode + 2));
    }

    return moves;
}