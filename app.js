// Checkpoint 1 | Creating the queen object
var queen = {
    direction: "S",
    position: {
        x: 0,
        y: 4
    }
};
// Checkpoint 2 | Turning the queen
var dir = prompt("Enter the Direction & Steps as 'NE2'");

var array = dir.split(" ");
var steps = array[0].slice(-1);
var direction = array[0].slice(0, -1);
console.log(array)
console.log("Steps:" + steps);
console.log("direction:" + direction);

function changedirection() {
    switch (direction) {
        case 'S':
            temp = parseInt(" queen.position.x + steps", 10);
            if (temp >= 0 && temp < 8) {
                queen.position.x = temp;
                console.log(queen.position.x);
            }
            else {
                console.log("crossing the boundary");
            }
            break;
        case 'N':
            temp = queen.position.x - steps;
            if (temp >= 0 && temp < 8) {
                queen.position.x = temp;
            }
            else {
                console.log("crossing the boundary");
            }
            break;
        case 'E':
            temp = queen.position.y + steps;
            if (temp >= 0 && temp < 8) {
                queen.position.y = temp;
            }
            else {
                console.log("crossing the boundary");
            }
            break;
        case 'W':
            temp = queen.position.y - steps;
            if (temp >= 0 && temp < 8) {
                queen.position.y = temp;
            }
            else {
                console.log("crossing the boundary");
            }
            break;
        case 'SE':
            temp_x = queen.position.x + steps;
            temp_y = queen.position.y + steps;
            if ((temp_x >= 0 && temp_x < 8) && (temp_y >= 0 && temp_y < 8)) {
                queen.position.x = temp_x;
                queen.position.y = temp_y;
            }
            else {
                console.log("crossing the boundary");
            }
            break;
        case 'SW':
            temp_x = queen.position.x + steps;
            temp_y = queen.position.y - steps;
            if ((temp_x >= 0 && temp_x < 8) && (temp_y >= 0 && temp_y < 8)) {
                queen.position.x = temp_x;
                queen.position.y = temp_y;
            }
            else {
                console.log("crossing the boundary");
            }
            break;
        case 'NW':
            temp_x = queen.position.x - steps;
            temp_y = queen.position.y - steps;
            if ((temp_x >= 0 && temp_x < 8) && (temp_y >= 0 && temp_y < 8)) {
                queen.position.x = temp_x;
                queen.position.y = temp_y;
            }
            else {
                console.log("crossing the boundary");
            }
            break;
        case 'NE':
            temp_x = queen.position.x - steps;
            temp_y = queen.position.y + steps;
            if ((temp_x >= 0 && temp_x < 8) && (temp_y >= 0 && temp_y < 8)) {
                queen.position.x = temp_x;
                queen.position.y = temp_y;
            }
            else {
                console.log("crossing the boundary");
            }
            break;

    }
}

var position = changedirection();


// Checkpoint 3 | Moving the queen
function moveForward(steps) {
    for (i = 0; i < 8; i++) {
        var queen_moves = steps;
        var pos = [queen[i].position, queen[i].direction, queen_moves]

        document.write("<br/>Queen " + (i + 1) + ":" + updatePosition(arr) + "<br/>");
        queens[i].position = pos;

    }

}
// Checkpoint 4 | Jump move the queen
function jumpMoveForward(steps) {

}
// Checkpoint 5 |  Tracking the position
function updatePosition(pos) {
    positionLog = [
        ["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8"],
        ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"],
        ["a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6"],
        ["a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5"],
        ["a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4"],
        ["a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3"],
        ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"],
        ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"]
    ];
    return (positionLog[pos[1]][pos[0]]);
}
// Bonus 1 - Gotta keep her in the battle!

// Bonus 2 - The queen is more powerful than what you think!

// Bonus 3 - How about multiple queens?