// TURN IDENTIFICATION
let turn = "X";

// SPACE CLICKED TO SIGNIFY TURN
function spaceClicked (spaceId) {
    const space = document.getElementById(spaceId);
    space.innerHTML = turn;
    if (turn === "X") {
        turn = "O";
    } else {
        turn = "X";
    }
}

// WHO'S TURN IS IT? BUTTON FUNCTIONALITY
function turnButtonClicked () {
    alert("It's " + turn + "'s Turn!");
}