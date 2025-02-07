const players = ["Connor Bedard", "Logan Cooley", "Adam Fantilli"];

const list = document.getElementById("player-list");
players.forEach(player => {
    let listItem = document.createElement("li");
    listItem.textContent = player;
    list.appendChild(listItem);
});
