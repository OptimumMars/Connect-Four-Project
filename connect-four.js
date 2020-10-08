import { Game } from "./game.js";

let game;

window.addEventListener("DOMContentLoaded", (e) => {
    const player1 = document.getElementById("player-1-name");
    const player2 = document.getElementById("player-2-name");
    const newGameBtn = document.getElementById("new-game");
    const boardHolder = document.getElementById("board-holder");
    const gameName = document.getElementById("game-name");
    const clickTargets = document.getElementById("click-targets");

    const updateUI = () => {
        if (game === undefined) {
            boardHolder.classList.add("is-invisible");
        } else {
            console.log("this is invisible");
            boardHolder.classList.remove("is-invisible");
            gameName.innerHTML = game.getName();
            if (game.currentPlayer === 1) {
                clickTargets.classList.add("red");
                clickTargets.classList.remove("black");
                console.log("red is current player")
            } else {
                clickTargets.classList.add("black");
                clickTargets.classList.remove("red");
                console.log("black is current player");
            }
        }
    };
    const checkNames = () => {
        if (player1.value && player2.value) {
            newGameBtn.disabled = false;
        } else {
            newGameBtn.disabled = true;
        }
    };
    player1.addEventListener("keyup", checkNames);
    player2.addEventListener("keyup", checkNames);

    newGameBtn.addEventListener("click", () => {
        game = new Game(player1.value, player2.value);
        player1.value = "";
        player2.value = "";
        //checkNames();
        newGameBtn.disabled = true;
        updateUI();
    });

    clickTargets.addEventListener("click", (event) => {
        game.playInColumn();
        updateUI();
    })

});
