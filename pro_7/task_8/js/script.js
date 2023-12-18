const games = ["minecraft", "fortnite", "pubg", "free-fire max"];

Array.prototype.convertToUppercase = function() {
    return this.map(game => game.toUpperCase());
};

const ucaseGames = games.convertToUppercase();

console.log("before Games name :", games);
console.log("AFTER GAMES NAME :", ucaseGames);


