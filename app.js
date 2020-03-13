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
            const temp = queen.position.x + steps
            if (temp >= 0 && temp < 8) {
                queen.position.x = temp;
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
            if (boundarycheck(temp_x, temp_y)) {
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
            if (boundarycheck(temp_x, temp_y)) {
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
            if (boundarycheck(temp)) {
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
            if (boundarycheck(temp_x, temp_y)) {
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


// Checkpoint 4 | Jump move the queen

// Checkpoint 5 |  Tracking the position

// Bonus 1 - Gotta keep her in the battle!

// Bonus 2 - The queen is more powerful than what you think!

// Bonus 3 - How about multiple queens?