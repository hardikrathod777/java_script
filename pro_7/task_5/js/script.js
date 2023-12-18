function Mobile(modelNumber) {
    this.modelNumber = modelNumber || "DefaultModel";
}

Mobile.prototype.setColor = function(color) {
    this.color = color;
};

const mobile1 = new Mobile("x5050");
mobile1.setColor("Black");

const mobile2 = new Mobile("X123");
mobile2.setColor("Silver");

console.log("Mobile 1:");
console.log("Model :", mobile1.modelNumber);
console.log("Color:", mobile1.color || "No color set");

console.log("\nMobile 2:");
console.log("Model :", mobile2.modelNumber);
console.log("Color:", mobile2.color || "No color set");
