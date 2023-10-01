// current user
const currentUser = localStorage.getItem("user");
console.log(currentUser);
const userDisplay = document.getElementById("userDisplay");
userDisplay.innerHTML = ` ${currentUser}`;

// current palette
const currentPalette = localStorage.getItem("selectedPalette");
console.log("paleta recuperada en string ---- " + currentPalette);
// current palette en HTML
const paletteDisplay = document.getElementById("paletteDisplay");
paletteDisplay.innerHTML = ` ${currentPalette}`;

// generador numero aleatorio, modificar a variable para otras dificultades
const randomNumber = [parseInt(Math.random() * 4), parseInt(Math.random() * 4), parseInt(Math.random() * 4), parseInt(Math.random() * 4)];
console.log(randomNumber);

// current palette string to array
const currentPaletteColors = currentPalette.split(",");
console.log("current colors array ---> " + currentPaletteColors);
console.log("current colors array random pos ---> " + currentPaletteColors[randomNumber]);

// pushing random position of current palette to generate a new random palette
const randomPalette = [currentPaletteColors[randomNumber[0]], currentPaletteColors[randomNumber[1]], currentPaletteColors[randomNumber[2]], currentPaletteColors[randomNumber[3]]];
console.log(randomPalette);

// splited colors
const randomPalettePos1 = randomPalette[0]
const randomPalettePos2 = randomPalette[1]
const randomPalettePos3 = randomPalette[2]
const randomPalettePos4 = randomPalette[3]
console.log("palette pos 1 -------> " + randomPalettePos1);
console.log("palette pos 2 -------> " + randomPalettePos3);
console.log("palette pos 3 -------> " + randomPalettePos4);
console.log("palette pos 4 -------> " + randomPalettePos2);