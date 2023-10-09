// id elements
const masterPalette1 = document.getElementById('masterPalette1')
const masterPalette2 = document.getElementById('masterPalette2')
const masterPalette3 = document.getElementById('masterPalette3')
const masterPalette4 = document.getElementById('masterPalette4')
const masterPalette5 = document.getElementById('masterPalette5')
const masterPalette6 = document.getElementById('masterPalette6')
const masterPalette1win = document.getElementById('masterPalette1win')
const masterPalette2win = document.getElementById('masterPalette2win')
const masterPalette3win = document.getElementById('masterPalette3win')
const masterPalette4win = document.getElementById('masterPalette4win')
const masterPalette5win = document.getElementById('masterPalette5win')
const masterPalette6win = document.getElementById('masterPalette6win')
// const currentPalette1 = document.getElementById('currentPalette1')
// const currentPalette2 = document.getElementById('currentPalette2')
// const currentPalette3 = document.getElementById('currentPalette3')
// const currentPalette4 = document.getElementById('currentPalette4')
// const currentPalette5 = document.getElementById('currentPalette5')
// const currentPalette6 = document.getElementById('currentPalette6')
const userPaletteCol1 = document.getElementById('userPaletteCol1')
const userPaletteCol2 = document.getElementById('userPaletteCol2')
const userPaletteCol3 = document.getElementById('userPaletteCol3')
const userPaletteCol4 = document.getElementById('userPaletteCol4')
const userPaletteCol5 = document.getElementById('userPaletteCol5')
const userPaletteCol6 = document.getElementById('userPaletteCol6')
let ruleta = 0;
let current1;
let current2;
let current3;
let current4;
let current5;
let current6;

// current user
const currentUser = localStorage.getItem("user");
console.log("Usuario-----> " + currentUser);
const userDisplay = document.getElementById("userDisplay");
userDisplay.innerHTML = `user ID: ${currentUser}`;

// current palette
const currentPalette = localStorage.getItem("selectedPalette");
// console.log("paleta recuperada en string ---- " + currentPalette);

// current dificult level
const selectedDificulty = localStorage.getItem("dificultSelected");
console.log("dificulty level -------> " + selectedDificulty);
if (selectedDificulty === "easy") {
    document.getElementById("userPaletteCol5").remove();
    document.getElementById("userPaletteCol6").remove();
    document.getElementById("masterPalette5").remove();
    document.getElementById("masterPalette6").remove();
    document.getElementById("masterPalette5win").remove();
    document.getElementById("masterPalette6win").remove();
    // document.getElementById("currentPalette5").remove();
    // document.getElementById("currentPalette6").remove();
}

if (selectedDificulty === "hard") {
    userPaletteCol1.style.height = "3.3rem";
    userPaletteCol2.style.height = "3.3rem";
    userPaletteCol3.style.height = "3.3rem";
    userPaletteCol4.style.height = "3.3rem";
    userPaletteCol5.style.height = "3.3rem";
    userPaletteCol6.style.height = "3.3rem";
    userPaletteCol1.style.width = "3.3rem";
    userPaletteCol2.style.width = "3.3rem";
    userPaletteCol3.style.width = "3.3rem";
    userPaletteCol4.style.width = "3.3rem";
    userPaletteCol5.style.width = "3.3rem";
    userPaletteCol6.style.width = "3.3rem";
}

// current palette en HTML
const paletteDisplay = document.getElementById("paletteDisplay");
paletteDisplay.innerHTML = `${currentPalette}`;

// generador numero aleatorio, modificar a variable para otras dificultades
const randomNumber = [
    parseInt(Math.random() * 4),
    parseInt(Math.random() * 4),
    parseInt(Math.random() * 4),
    parseInt(Math.random() * 4),
    parseInt(Math.random() * 4),
    parseInt(Math.random() * 4)
];
// console.log("random index pos -----> " + randomNumber);

// current palette string to array
const currentPaletteColors = currentPalette.split(",");
// console.log("current colors array ---> " + currentPaletteColors);
// console.log("current colors array random pos ---> " + currentPaletteColors[randomNumber]);

// pushing random position of current palette to generate a new random palette
if (selectedDificulty === "easy") {
 randomPalette = [
    currentPaletteColors[randomNumber[0]],
    currentPaletteColors[randomNumber[1]],
    currentPaletteColors[randomNumber[2]],
    currentPaletteColors[randomNumber[3]]
];
}

if (selectedDificulty === "hard") {
    randomPalette = [
        currentPaletteColors[randomNumber[0]],
        currentPaletteColors[randomNumber[1]],
        currentPaletteColors[randomNumber[2]],
        currentPaletteColors[randomNumber[3]],
        currentPaletteColors[randomNumber[4]],
        currentPaletteColors[randomNumber[5]]
    ]
}
// console.log("paleta random de Ms Mind ------> " + randomPalette);

// splited colors
const randomPalettePos1 = randomPalette[0]
const randomPalettePos2 = randomPalette[1]
const randomPalettePos3 = randomPalette[2]
const randomPalettePos4 = randomPalette[3]
if (selectedDificulty === "hard") {
    const randomPalettePos5 = randomPalette[4]
    const randomPalettePos6 = randomPalette[5]
}

// console.log("palette pos 1 -------> " + randomPalettePos1);
// console.log("palette pos 2 -------> " + randomPalettePos3);
// console.log("palette pos 3 -------> " + randomPalettePos4);
// console.log("palette pos 4 -------> " + randomPalettePos2);

// current palette
// currentPalette1.style.backgroundColor = currentPaletteColors[0];
// currentPalette2.style.backgroundColor = currentPaletteColors[1];
// currentPalette3.style.backgroundColor = currentPaletteColors[2];
// currentPalette4.style.backgroundColor = currentPaletteColors[3];
// if (selectedDificulty === "hard") {
//     currentPalette5.style.backgroundColor = currentPaletteColors[4];
//     currentPalette6.style.backgroundColor = currentPaletteColors[5];
// }

// Ms. Mind palette
masterPalette1.style.backgroundColor = randomPalette[0];
masterPalette2.style.backgroundColor = randomPalette[1];
masterPalette3.style.backgroundColor = randomPalette[2];
masterPalette4.style.backgroundColor = randomPalette[3];
if (selectedDificulty === "hard") {
    masterPalette5.style.backgroundColor = randomPalette[4];
    masterPalette6.style.backgroundColor = randomPalette[5];
}

masterPalette1win.style.backgroundColor = randomPalette[0];
masterPalette2win.style.backgroundColor = randomPalette[1];
masterPalette3win.style.backgroundColor = randomPalette[2];
masterPalette4win.style.backgroundColor = randomPalette[3];
if (selectedDificulty === "hard") {
    masterPalette5win.style.backgroundColor = randomPalette[4];
    masterPalette6win.style.backgroundColor = randomPalette[5];
}

// button color roulette and current row colours order function
userPaletteCol1.addEventListener('click', () => {
    ruleta++;
    if (ruleta > 3) {
        ruleta = 0;
    }
    userPaletteCol1.style.backgroundColor = currentPaletteColors[ruleta];
    current1 = currentPaletteColors[ruleta];
    refreshCurrent();
})
userPaletteCol2.addEventListener('click', () => {
    ruleta++;
    if (ruleta > 3) {
        ruleta = 0;
    }
    userPaletteCol2.style.backgroundColor = currentPaletteColors[ruleta];
    current2 = currentPaletteColors[ruleta];
    refreshCurrent();
})
userPaletteCol3.addEventListener('click', () => {
    ruleta++;
    if (ruleta > 3) {
        ruleta = 0;
    }
    userPaletteCol3.style.backgroundColor = currentPaletteColors[ruleta];
    current3 = currentPaletteColors[ruleta];
    refreshCurrent();
})
userPaletteCol4.addEventListener('click', () => {
    ruleta++;
    if (ruleta > 3) {
        ruleta = 0;
    }
    userPaletteCol4.style.backgroundColor = currentPaletteColors[ruleta];
    current4 = currentPaletteColors[ruleta];
    refreshCurrent();
})
userPaletteCol5.addEventListener('click', () => {
    ruleta++;
    if (ruleta > 3) {
        ruleta = 0;
    }
    userPaletteCol5.style.backgroundColor = currentPaletteColors[ruleta];
    current5 = currentPaletteColors[ruleta];
    refreshCurrent();
})
userPaletteCol6.addEventListener('click', () => {
    ruleta++;
    if (ruleta > 3) {
        ruleta = 0;
    }
    userPaletteCol6.style.backgroundColor = currentPaletteColors[ruleta];
    current6 = currentPaletteColors[ruleta];
    refreshCurrent();
})
function refreshCurrent() {
    // console.log(current1, current2, current3, current4);
    return currentRow = [
        current1,
        current2,
        current3,
        current4,
        current5,
        current6
    ];
}

// row checker
const checkRow = (master, decoder) => {
    console.log("ruleta ----> " + ruleta);
    let colorCheck = 0;
    let posColorCheck = 0;
    if (selectedDificulty === "easy") {
        for (let i = 0; i < decoder.length; i++) {
            const element = decoder[i];
            const masterIncludes = master.includes(element);
            if (masterIncludes) {
                colorCheck++;
            }
            for (let j = 0; j < master.length; j++) {
                if (master[i] === decoder[j] && i === j) {
                    posColorCheck++;
                    if (masterIncludes) {
                        colorCheck--;
                    }
                }
            }
        }
    }
    if (selectedDificulty === "hard") {
        master.length = 6;
        decoder.length = 6;
        for (let i = 0; i < decoder.length; i++) {
            const element = decoder[i];
            const masterIncludes = master.includes(element);
            if (masterIncludes) {
                colorCheck++;
            }
            for (let j = 0; j < master.length; j++) {
                if (master[i] === decoder[j] && i === j) {
                    posColorCheck++;
                    if (masterIncludes) {
                        colorCheck--;
                    }
                }
            }
        }
    }
    return {
        blacks: colorCheck,
        whites: posColorCheck,
        win: posColorCheck === master.length && posColorCheck === decoder.length
    };
}

// played rows
const rowsPlayed = document.getElementById('rowsPlayed');
const checks = document.getElementById('checks');
const pushToMatrix = document.getElementById('pushToMatrix');

//tries
let tries = 10;
let gameOver = false;
let win = false;
if (selectedDificulty == "hard") {
    tries = 12;
}

document.getElementById("gameover").style.display = "none";
document.getElementById("winner").style.display = "none";

// print played row
pushToMatrix.addEventListener('click', () => {
    const currentPlayerRow = refreshCurrent();
    if (selectedDificulty == "easy") {
        currentPlayerRow.length=4;
    }
    const currentCheckRow = checkRow(randomPalette, currentRow);
    tries--;
    if (tries <= 0) {
        gameOver = true;
        document.getElementById("gameover").style.display = "initial";
        document.getElementById("pushToMatrix").disabled = true;
        console.log("gameOver");
    }
    const win = currentCheckRow.win;
    if(win){
        document.getElementById("winner").style.display = "initial";
        document.getElementById("pushToMatrix").disabled = true;
    }
    console.log("He ganado -----> " + win);
    console.log(tries);
    console.log("Es gameover ----> " + gameOver);
    if (gameOver === false && win === false) {
        // get current played values
        console.log("Ms. Mind - Palette ---- > " + randomPalette);
        console.log("currentPlayerRow - Palette ---- > " + currentPlayerRow); // check current combination
        console.log("whites ----> " + currentCheckRow.whites);
        console.log("blacks ----> " + currentCheckRow.blacks);
        const blackCol = "#000000";
        const blacksRow = [];
        for (let i = 0; i < currentCheckRow.blacks; i++) {
            console.log("black repetidos");
            blacksRow.push(blackCol);
        }
        const whiteCol = "#FFFFFF";
        const whitesRow = [];
        for (let i = 0; i < currentCheckRow.whites; i++) {
            console.log("whites repetidos");
            whitesRow.push(whiteCol);
        }
        const newRow = document.createElement('div');
        rowsPlayed.appendChild(newRow);
        if (selectedDificulty === "easy") {
            newRow.innerHTML = `
        <div class="color-board">
            <div class="color-cell" style="background-color:${current1}"></div>
            <div class="color-cell" style="background-color:${current2}"></div>
            <div class="color-cell" style="background-color:${current3}"></div>
            <div class="color-cell" style="background-color:${current4}"></div>
        </div>`;
            const newChecksRow = document.createElement('div');
            checks.appendChild(newChecksRow);
            newChecksRow.innerHTML = `
        <div class="col-check-col" style="background-color:white">
            <div class="is-color" style="background-color:${blacksRow[0]}"></div>
            <div class="is-color" style="background-color:${blacksRow[1]}"></div>
            <div class="is-color" style="background-color:${blacksRow[2]}"></div>
            <div class="is-color" style="background-color:${blacksRow[3]}"></div>
        </div>
        <div class="pos-col-check-col" style="background-color:black">
            <div class="is-color-and-pos" style="background-color:${whitesRow[0]}"></div>
            <div class="is-color-and-pos" style="background-color:${whitesRow[1]}"></div>
            <div class="is-color-and-pos" style="background-color:${whitesRow[2]}"></div>
            <div class="is-color-and-pos" style="background-color:${whitesRow[3]}"></div>
        </div>
       `;
        }
        if (selectedDificulty === "hard") {
            newRow.innerHTML = `
            <div class="color-board">
                <div class="color-cell-hard" style="background-color:${current1}"></div>
                <div class="color-cell-hard" style="background-color:${current2}"></div>
                <div class="color-cell-hard" style="background-color:${current3}"></div>
                <div class="color-cell-hard" style="background-color:${current4}"></div>
                <div class="color-cell-hard" style="background-color:${current5}"></div>
                <div class="color-cell-hard" style="background-color:${current6}"></div>
            </div>`;
            const newChecksRow = document.createElement('div');
            checks.appendChild(newChecksRow);
            newChecksRow.innerHTML = `
            <div class="col-check-col-hard" style="background-color:white">
                <div class="is-color-hard" style="background-color:${blacksRow[0]}"></div>
                <div class="is-color-hard" style="background-color:${blacksRow[1]}"></div>
                <div class="is-color-hard" style="background-color:${blacksRow[2]}"></div>
                <div class="is-color-hard" style="background-color:${blacksRow[3]}"></div>
                <div class="is-color-hard" style="background-color:${blacksRow[4]}"></div>
                <div class="is-color-hard" style="background-color:${blacksRow[5]}"></div>
            </div>
            <div class="pos-col-check-col-hard" style="background-color:black">
                <div class="is-color-and-pos-hard" style="background-color:${whitesRow[0]}"></div>
                <div class="is-color-and-pos-hard" style="background-color:${whitesRow[1]}"></div>
                <div class="is-color-and-pos-hard" style="background-color:${whitesRow[2]}"></div>
                <div class="is-color-and-pos-hard" style="background-color:${whitesRow[3]}"></div>
                <div class="is-color-and-pos-hard" style="background-color:${whitesRow[4]}"></div>
                <div class="is-color-and-pos-hard" style="background-color:${whitesRow[5]}"></div>
            </div>
           `;
        }
    }
})
