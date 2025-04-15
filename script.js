const imageOrder = [
    "menina", "menino", "menino",
    "menina", "menina", "menino",
    "menino", "menina", "menino"
];

const board = document.getElementById("board");
const cells = board.querySelectorAll(".cell");

cells.forEach(cell => {
    cell.addEventListener("click", () => {
        const index = cell.getAttribute("data-index");
        const imgType = imageOrder[index];
        const img = document.createElement("img");
        img.src = imgType + ".png";
        img.alt = imgType;
        cell.classList.add("clicked");
        cell.appendChild(img);

        // Força reflow para animação suave
        requestAnimationFrame(() => {
            cell.classList.add("show");
        });
        checkVictory();
    });
});

function resetGame() {
    cells.forEach(cell => {
        cell.innerHTML = "";
        cell.classList.remove("clicked", "show", "winner");
    });
}

const winPatterns = [
    [0, 1, 2], // linhas
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], // colunas
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8], // diagonais
    [2, 4, 6]
];

function checkVictory() {
    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        const imgA = cells[a].querySelector("img");
        const imgB = cells[b].querySelector("img");
        const imgC = cells[c].querySelector("img");

        if (imgA && imgB && imgC &&
            imgA.src === imgB.src && imgB.src === imgC.src) {

            // Aplica efeito visual nas células vencedoras
            pattern.forEach(index => {
                cells[index].classList.add("winner");
            });

            // Opcional: desativar cliques após vitória
            cells.forEach(cell => cell.removeEventListener("click", handleCellClick));

            return true;
        }
    }
    return false;
}
