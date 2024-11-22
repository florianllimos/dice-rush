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

    