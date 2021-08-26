
"use strict";

window.addEventListener("DOMContentLoaded", start);

// Variabler for spillere
let player = "player2";
let computer = "player1";
// let players = document.querySelectorAll(".player");

let randomWeapon;
let weapon = ["rock", "paper", "scissors"];


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
        computersChoise();
    });

    document.querySelector("button.paper").addEventListener("click", () => {
        playerChose = "paper";
        computersChoise();
    });

     document.querySelector("button.scissors").addEventListener("click", () => {
        playerChose = "scissors";  
        computersChoise();   
    }); 

}

function computersChoise() {
    console.log("Computers Choise");

    randomWeapon = Math.floor(Math.random() * 2);
    computerChose = weapon[randomWeapon];


    // computerChose = "paper";
    console.log("Computers Choise " + computerChose);

    countdown();
}

function countdown() {

    console.log(playerChose);
    console.log(computerChose);

    player2.classList.add("shake");     
    player1.classList.add("shake");     
    
    player2.addEventListener("animationend", () => {
    player2.className = "player"
    player2.classList.add(playerChose);
    });

    player1.addEventListener("animationend", () => {
    player1.className = "player"
    player1.classList.add(computerChose);
    });

    determinWinner();
}

function determinWinner() {
    console.log("Determin winner")

    player2.addEventListener("animationend", () => {

        if (computerChose == "paper" && playerChose == "paper") {
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
    });
};

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