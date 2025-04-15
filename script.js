const imageOrder = [
    "menino", "menina", "menino",
    "menina", "menino", "menina",
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
    });
});

function resetGame() {
    cells.forEach(cell => {
    cell.innerHTML = "";
    cell.classList.remove("clicked", "show");
    });
}