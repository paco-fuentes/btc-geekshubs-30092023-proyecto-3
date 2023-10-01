// id elements
const masterPalette1 = document.getElementById('masterPalette1')
const masterPalette2 = document.getElementById('masterPalette2')
const masterPalette3 = document.getElementById('masterPalette3')
const masterPalette4 = document.getElementById('masterPalette4')
const currentPalette1 = document.getElementById('currentPalette1')
const currentPalette2 = document.getElementById('currentPalette2')
const currentPalette3 = document.getElementById('currentPalette3')
const currentPalette4 = document.getElementById('currentPalette4')
const userPaletteRow1Col1 = document.getElementById('userPaletteRow1Col1')
const userPaletteRow1Col2 = document.getElementById('userPaletteRow1Col2')
const userPaletteRow1Col3 = document.getElementById('userPaletteRow1Col3')
const userPaletteRow1Col4 = document.getElementById('userPaletteRow1Col4')
const userPaletteRow2Col1 = document.getElementById('userPaletteRow2Col1')
const userPaletteRow2Col2 = document.getElementById('userPaletteRow2Col2')
const userPaletteRow2Col3 = document.getElementById('userPaletteRow2Col3')
const userPaletteRow2Col4 = document.getElementById('userPaletteRow2Col4')
const userPaletteRow3Col1 = document.getElementById('userPaletteRow3Col1')
const userPaletteRow3Col2 = document.getElementById('userPaletteRow3Col2')
const userPaletteRow3Col3 = document.getElementById('userPaletteRow3Col3')
const userPaletteRow3Col4 = document.getElementById('userPaletteRow3Col4')
const userPaletteRow4Col1 = document.getElementById('userPaletteRow4Col1')
const userPaletteRow4Col2 = document.getElementById('userPaletteRow4Col2')
const userPaletteRow4Col3 = document.getElementById('userPaletteRow4Col3')
const userPaletteRow4Col4 = document.getElementById('userPaletteRow4Col4')
const userPaletteRow5Col1 = document.getElementById('userPaletteRow5Col1')
const userPaletteRow5Col2 = document.getElementById('userPaletteRow5Col2')
const userPaletteRow5Col3 = document.getElementById('userPaletteRow5Col3')
const userPaletteRow5Col4 = document.getElementById('userPaletteRow5Col4')
const userPaletteRow6Col1 = document.getElementById('userPaletteRow6Col1')
const userPaletteRow6Col2 = document.getElementById('userPaletteRow6Col2')
const userPaletteRow6Col3 = document.getElementById('userPaletteRow6Col3')
const userPaletteRow6Col4 = document.getElementById('userPaletteRow6Col4')
const userPaletteRow7Col1 = document.getElementById('userPaletteRow7Col1')
const userPaletteRow7Col2 = document.getElementById('userPaletteRow7Col2')
const userPaletteRow7Col3 = document.getElementById('userPaletteRow7Col3')
const userPaletteRow7Col4 = document.getElementById('userPaletteRow7Col4')
const userPaletteRow8Col1 = document.getElementById('userPaletteRow8Col1')
const userPaletteRow8Col2 = document.getElementById('userPaletteRow8Col2')
const userPaletteRow8Col3 = document.getElementById('userPaletteRow8Col3')
const userPaletteRow8Col4 = document.getElementById('userPaletteRow8Col4')
const userPaletteRow9Col1 = document.getElementById('userPaletteRow9Col1')
const userPaletteRow9Col2 = document.getElementById('userPaletteRow9Col2')
const userPaletteRow9Col3 = document.getElementById('userPaletteRow9Col3')
const userPaletteRow9Col4 = document.getElementById('userPaletteRow9Col4')
const userPaletteRow10Col1 = document.getElementById('userPaletteRow10Col1')
const userPaletteRow10Col2 = document.getElementById('userPaletteRow10Col2')
const userPaletteRow10Col3 = document.getElementById('userPaletteRow10Col3')
const userPaletteRow10Col4 = document.getElementById('userPaletteRow10Col4')

// current user
const currentUser = localStorage.getItem("user");
console.log(currentUser);
const userDisplay = document.getElementById("userDisplay");
userDisplay.innerHTML = `user ID:  ${currentUser}`;

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

// current palette
currentPalette1.style.backgroundColor = currentPaletteColors[0];
currentPalette2.style.backgroundColor = currentPaletteColors[1];
currentPalette3.style.backgroundColor = currentPaletteColors[2];
currentPalette4.style.backgroundColor = currentPaletteColors[3];

// Ms. Mind palette
masterPalette1.style.backgroundColor = randomPalette[0];
masterPalette2.style.backgroundColor = randomPalette[1];
masterPalette3.style.backgroundColor = randomPalette[2];
masterPalette4.style.backgroundColor = randomPalette[3];
