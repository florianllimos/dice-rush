// ALERTE DU DEBUT 


// DECLARATION DES JOUEURS

let player1 = parseInt(document.getElementById('currentP1').innerHTML);
let player2 = parseInt(document.getElementById('currentP2').innerHTML);
let totalP1 = parseInt(document.getElementById('player1').innerHTML);
let totalP2 = parseInt(document.getElementById('player2').innerHTML);

// FONCTION NOMBRE RANDOM AVEC APPEL DES DICE EN FONCTION DU RESULAT

function randomDice () {
    let min = 1;
    let max = 7;
    let x = Math.floor(Math.random() * (max - min)) + min;

    if (x === 1) {
        changePlayer(false);
    } if (x === 2) {
        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, 120, 120);
        ctx.fill();
        ctx.fillStyle="#FF4422"
        ctx.arc(20, 20, 8, 0, 2 * Math.PI);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(100, 100, 8, 0, 2 * Math.PI);
        ctx.fill();
    } if (x === 3) {
        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, 120, 120);
        ctx.fill();
        ctx.fillStyle="#FF4422"
        ctx.arc(20, 20, 8, 0, 2 * Math.PI);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(100, 100, 8, 0, 2 * Math.PI);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(60, 60, 8, 0, 2 * Math.PI);
        ctx.fill();
    } if (x === 4) {
        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, 120, 120);
        ctx.fill();
        ctx.fillStyle="#FF4422"
        ctx.arc(20, 20, 8, 0, 2 * Math.PI);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(100, 100, 8, 0, 2 * Math.PI);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(100, 20, 8, 0, 2 * Math.PI);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(20, 100, 8, 0, 2 * Math.PI);
        ctx.fill();
    } if (x === 5) {
        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, 120, 120);
        ctx.fill();
        ctx.fillStyle="#FF4422"
        ctx.arc(20, 20, 8, 0, 2 * Math.PI);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(100, 100, 8, 0, 2 * Math.PI);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(100, 20, 8, 0, 2 * Math.PI);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(20, 100, 8, 0, 2 * Math.PI);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(60, 60, 8, 0, 2 * Math.PI);
        ctx.fill();
    } if (x === 6) {
        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, 120, 120);
        ctx.fill();
        ctx.fillStyle="#FF4422"
        ctx.arc(20, 20, 8, 0, 2 * Math.PI);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(100, 100, 8, 0, 2 * Math.PI);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(100, 20, 8, 0, 2 * Math.PI);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(20, 100, 8, 0, 2 * Math.PI);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(100, 60, 8, 0, 2 * Math.PI);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(20, 60, 8, 0, 2 * Math.PI);
        ctx.fill();
        } ifNotOne(x)
    };

    // SI LE NOMBRE N'EST PAS 1

    function ifNotOne (x) {
        if (x !== 1) {
            addPoint(x)
        } else {
            const canvas = document.getElementById("canvas");
            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.fillStyle = 'white';
            ctx.fillRect(0, 0, 120, 120);
            ctx.fill();
            ctx.fillStyle="#FF4422"
            ctx.arc(60, 60, 8, 0, 2 * Math.PI);
            ctx.fill();
            document.getElementById('currentP1').innerHTML = 0;
            document.getElementById('currentP2').innerHTML = 0;

        }
    }

    // AJOUT DE POINTS

    function addPoint(x) {
        let playerOnePlay = document.getElementById('p-1') 
        if (playerOnePlay.classList.contains('play')) {
            player1 = player1 + x
            document.getElementById('currentP1').innerHTML = player1;
        } else {
            player2 = player2 + x
            document.getElementById('currentP2').innerHTML = player2;
        }
    } 

let diceTruc = document.getElementById('roll');
diceTruc.addEventListener("click", randomDice, null);

// CHANGEMENT DE JOUEUR

function changePlayer (notFalse) {
    let playerOne = document.getElementById('p-1');
    let playTwo = document.getElementById("p-2")
    let winner = document.getElementById('winner').value;
    diceClear();
    if (playerOne.className === "play"){
        if (totalP1 < 100) {
            playerOne.classList.remove("play")
            playTwo.classList.add("play");
            if (notFalse) {
                totalP1 = totalP1 + player1;
                document.getElementById('player1').innerHTML = totalP1 ;
            } if (totalP1 >= 100) {
                document.getElementById('winner').innerHTML = 'Le joueur 1 remporte la partie !';
                change.removeEventListener("click", changePlayer, null);
                diceTruc.removeEventListener("click", randomDice, null);
            }
            player1 = 0;
            document.getElementById('currentP1').innerHTML = player1;
            } else {
                console.log('Waiting a winner');
        }
    } else {
        if (totalP2 < 100) {
            playTwo.classList.remove("play")
            playerOne.classList.add("play");
            if (notFalse) {
                totalP2 = totalP2 + player2;
                document.getElementById('player2').innerHTML = totalP2;
            } if (totalP2 >= 100) {
                document.getElementById('winner').innerHTML = 'Le joueur 2 remporte la partie !';
                change.removeEventListener("click", changePlayer, null);
                diceTruc.removeEventListener("click", randomDice, null);
            }
            player2 = 0;
            document.getElementById('currentP2').innerHTML = player2;
        } else {
            console.log('Waiting a winner');
        }
    }
}  

// ATTRIBUTION EVENTS

let change = document.getElementById('hold');
change.addEventListener("click", changePlayer, null);

let game = document.getElementById('game-start');
game.addEventListener("click", gameNew, null);

// NOUVELLE PARTIE

function gameNew () {
    player1 = 0;
    player2 = 0;
    totalP1 = 0;
    totalP2 = 0;
    
    document.getElementById('winner').innerHTML = '';
    diceClear();
    
    document.getElementById('currentP1').innerHTML = player1;
    document.getElementById('currentP2').innerHTML = player2;
    document.getElementById('player1').innerHTML = totalP1;
    document.getElementById('player2').innerHTML = totalP2;

    change.addEventListener("click", changePlayer, null);
    diceTruc.addEventListener("click", randomDice, null);
}

// NETTOYER LE DICE

function diceClear () {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, 120, 120);
    ctx.fill();
}