
"use strict";

window.addEventListener("DOMContentLoaded", start);

// Variabler for spillere
let player = "player2";
let computer = "player1";
let players = document.querySelectorAll(".player");

let weapon = ["wearpon1", "weapon2", "weapon3"];

let playerChose;
let computerChose;


function start() {
    console.log("Start");

    playersChoise(); // Kalder funktionen "playersChoise"
}

function playersChoise() {
    console.log("Players Choise");

    document.querySelector("button.rock").addEventListener("click", () => {
        playerChose = "rock";
        console.log("players choise: " + playerChose);
        player2.classList.add("shake");
      
        player2.addEventListener("animationend", () => {
            player2.className = "player"
            player2.classList.add("rock");
            computersChoise();// Kalder funktionen "computersChoise"
        });
    });

    document.querySelector("button.paper").addEventListener("click", () => {
        playerChose = "paper";
        console.log(playerChose);
        player2.classList.add("shake");
       
        player2.addEventListener("animationend", () => {
            player2.className = "player"
            player2.classList.add("paper");
            computersChoise();// Kalder funktionen "computersChoise"
        });
    });

     document.querySelector("button.scissors").addEventListener("click", () => {
        playerChose = "scissors";
        console.log(playerChose);
        player2.classList.add("shake");

        player2.addEventListener("animationend", () => {
            player2.className = "player"
            player2.classList.add("scissors");
            computersChoise();// Kalder funktionen "computersChoise"
        });        
    }); 



}

function computersChoise() {
    console.log("Computers Choise");

    computerChose = "paper";
    console.log("Computers Choise " + computerChose);

    determinWinner();
}

function determinWinner() {
    console.log("Determin winner")

    if (computerChose === "paper" && playerChose === "paper") {
        showTie();
    }

    else if (computerChose == "paper" && playerChose == "scissors") {
        showWinner();
    }

    else if (computerChose == "paper" && playerChose == "rock") {
        showLooser();
    }

    else if (computerChose == "rock" && playerChose == "rock") {
        showTie();
    }

    else if (computerChose == "rock" && playerChose == "paper") {
        showWinner();
    }

    else if (computerChose == "rock" && playerChose == "scissors") {
        showLooser();
    }

    else if (computerChose == "scissors" && playerChose == "scissors") {
        showTie();
    }

    else if (computerChose == "scissors" && playerChose == "rock") {
        showWinner();
    }

    else {
        showLooser();
    }

    // if (winner === "computer") {
    //     showLooser();
    // }

    // else if (winner === "player") {
    //     showWinner();
    // }

    // else {
    //     showTie();
    // }
} 

function showWinner() {
    console.log("Show winner");
    document.querySelector("#win").classList.remove("hidden");
}

function showLooser() {
    console.log("Show looser");
    document.querySelector("#lose").classList.remove("hidden");
}

function showTie() {
    console.log("It's a tie");
    document.querySelector("#draw").classList.remove("hidden");
}