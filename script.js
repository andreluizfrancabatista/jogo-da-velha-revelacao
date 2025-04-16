const imageOrder = [
    "menina", "menino", "menino",
    "menina", "menina", "menino",
    "menino", "menina", "menino"
];

const board = document.getElementById("board");
const cells = board.querySelectorAll(".cell");
let turn = 0;
let gameOver = false;

cells.forEach(cell => {
    cell.addEventListener("click", () => {
        if (gameOver || cell.classList.contains("clicked")) return;

        turn++;

        // Toca o efeito sonoro
        const sound1 = document.getElementById('click-sound-1');
        const sound2 = document.getElementById('click-sound-2');
        if(turn % 2 === 0){
            if (!sound2.paused) fadeOutAudio(sound2, 1000);
            sound1.volume = 1;
            sound1.play();
        } else {
            if (!sound1.paused) fadeOutAudio(sound1, 1000);
            sound2.volume = 1;
            sound2.play();
        }

        const index = cell.getAttribute("data-index");
        const imgType = imageOrder[index];
        const img = document.createElement("img");
        img.src = imgType + ".png";
        img.alt = imgType;
        cell.classList.add("clicked");
        cell.appendChild(img);

        // Animação suave
        requestAnimationFrame(() => {
            cell.classList.add("show");
        });

        checkVictory();
    });
});

function resetGame() {
    turn = 0;
    gameOver = false;

    cells.forEach(cell => {
        cell.innerHTML = "";
        cell.classList.remove("clicked", "show", "winner");
    });

    const victoryAudio = document.getElementById('victory-sound');
    const sound1 = document.getElementById('click-sound-1');
    const sound2 = document.getElementById('click-sound-2');

    if (!victoryAudio.paused) fadeOutAudio(victoryAudio, 1000);
    if (!sound1.paused) fadeOutAudio(sound1, 1000);
    if (!sound2.paused) fadeOutAudio(sound2, 1000);

    //Alterar o header
    const h2Element = document.querySelector('.reveal-header h2'); // Alvo da alteração de texto
    const headerElement = document.querySelector('.reveal-header'); // Alvo da alteração de fundo
    h2Element.innerHTML = "Caio <span class='heart'>❤️</span> Fernanda";
    headerElement.classList.remove("reveal-header-boy");

    
}

function checkVictory() {
    const combos = [
        [0,1,2],[3,4,5],[6,7,8], // linhas
        [0,3,6],[1,4,7],[2,5,8], // colunas
        [0,4,8],[2,4,6]          // diagonais
    ];

    combos.forEach(combo => {
        const [a, b, c] = combo;
        const cellA = cells[a].querySelector("img");
        const cellB = cells[b].querySelector("img");
        const cellC = cells[c].querySelector("img");

        if (cellA && cellB && cellC &&
            cellA.alt === cellB.alt &&
            cellA.alt === cellC.alt) {

            gameOver = true;
            playVictorySound();

            combo.forEach(i => cells[i].classList.add("winner"));
            
            //Alterar o header
            const h2Element = document.querySelector('.reveal-header h2'); // Alvo da alteração de texto
            const headerElement = document.querySelector('.reveal-header'); // Alvo da alteração de fundo
            h2Element.innerHTML = "💙 É menino! 💙";
            headerElement.classList.add("reveal-header-boy");
            
        }
    });


}

function playVictorySound() {
    const sound1 = document.getElementById('click-sound-1');
    const sound2 = document.getElementById('click-sound-2');

    if (!sound1.paused) fadeOutAudio(sound1, 1000);
    if (!sound2.paused) fadeOutAudio(sound2, 1000);

    const audio = document.getElementById('victory-sound');
    audio.currentTime = 49;
    audio.volume = 1;
    audio.play();
}

function fadeOutAudio(audio, duration = 1000) {
    const step = 50;
    const volumeStep = audio.volume / (duration / step);

    const fade = setInterval(() => {
        if (audio.volume - volumeStep > 0) {
            audio.volume -= volumeStep;
        } else {
            audio.volume = 0;
            audio.pause();
            clearInterval(fade);
        }
    }, step);
}
