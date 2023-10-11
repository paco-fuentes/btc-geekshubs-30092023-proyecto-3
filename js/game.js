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
const userPaletteCol1 = document.getElementById('userPaletteCol1')
const userPaletteCol2 = document.getElementById('userPaletteCol2')
const userPaletteCol3 = document.getElementById('userPaletteCol3')
const userPaletteCol4 = document.getElementById('userPaletteCol4')
const userPaletteCol5 = document.getElementById('userPaletteCol5')
const userPaletteCol6 = document.getElementById('userPaletteCol6')
let ruleta1 = 0;
let ruleta2 = 0;
let ruleta3 = 0;
let ruleta4 = 0;
let ruleta5 = 0;
let ruleta6 = 0;
let current1;
let current2;
let current3;
let current4;
let current5;
let current6;
const currentUser = localStorage.getItem("user");
const userDisplay = document.getElementById("userDisplay");
userDisplay.innerHTML = `user ID: ${currentUser}`;
const currentPalette = localStorage.getItem("selectedPalette");
const selectedDificulty = localStorage.getItem("dificultSelected");
if (selectedDificulty === "easy") {
    document.getElementById("userPaletteCol5").remove();
    document.getElementById("userPaletteCol6").remove();
    document.getElementById("masterPalette5").remove();
    document.getElementById("masterPalette6").remove();
    document.getElementById("masterPalette5win").remove();
    document.getElementById("masterPalette6win").remove();
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
const paletteDisplay = document.getElementById("paletteDisplay");
paletteDisplay.innerHTML = `${currentPalette}`;
const randomNumber = [
    parseInt(Math.random() * 4),
    parseInt(Math.random() * 4),
    parseInt(Math.random() * 4),
    parseInt(Math.random() * 4),
    parseInt(Math.random() * 4),
    parseInt(Math.random() * 4)
];
const currentPaletteColors = currentPalette.split(",");
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
const randomPalettePos1 = randomPalette[0]
const randomPalettePos2 = randomPalette[1]
const randomPalettePos3 = randomPalette[2]
const randomPalettePos4 = randomPalette[3]
if (selectedDificulty === "hard") {
    const randomPalettePos5 = randomPalette[4]
    const randomPalettePos6 = randomPalette[5]
}
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
userPaletteCol1.addEventListener('click', () => {
    ruleta1++;
    if (ruleta1 > 3) {
        ruleta1 = 0;
    }
    userPaletteCol1.style.backgroundColor = currentPaletteColors[ruleta1];
    current1 = currentPaletteColors[ruleta1];
    refreshCurrent();
})
userPaletteCol2.addEventListener('click', () => {
    ruleta2++;
    if (ruleta2 > 3) {
        ruleta2 = 0;
    }
    userPaletteCol2.style.backgroundColor = currentPaletteColors[ruleta2];
    current2 = currentPaletteColors[ruleta2];
    refreshCurrent();
})
userPaletteCol3.addEventListener('click', () => {
    ruleta3++;
    if (ruleta3 > 3) {
        ruleta3 = 0;
    }
    userPaletteCol3.style.backgroundColor = currentPaletteColors[ruleta3];
    current3 = currentPaletteColors[ruleta3];
    refreshCurrent();
})
userPaletteCol4.addEventListener('click', () => {
    ruleta4++;
    if (ruleta4 > 3) {
        ruleta4 = 0;
    }
    userPaletteCol4.style.backgroundColor = currentPaletteColors[ruleta4];
    current4 = currentPaletteColors[ruleta4];
    refreshCurrent();
})
userPaletteCol5.addEventListener('click', () => {
    ruleta5++;
    if (ruleta5 > 3) {
        ruleta5 = 0;
    }
    userPaletteCol5.style.backgroundColor = currentPaletteColors[ruleta5];
    current5 = currentPaletteColors[ruleta5];
    refreshCurrent();
})
userPaletteCol6.addEventListener('click', () => {
    ruleta6++;
    if (ruleta6 > 3) {
        ruleta6 = 0;
    }
    userPaletteCol6.style.backgroundColor = currentPaletteColors[ruleta6];
    current6 = currentPaletteColors[ruleta6];
    refreshCurrent();
})
function refreshCurrent() {
    return currentRow = [
        current1,
        current2,
        current3,
        current4,
        current5,
        current6
    ];
}
const checkRow = (master, decoder) => {
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
const rowsPlayed = document.getElementById('rowsPlayed');
const checks = document.getElementById('checks');
const pushToMatrix = document.getElementById('pushToMatrix');
let tries = 10;
let gameOver = false;
let win = false;
if (selectedDificulty == "hard") {
    tries = 12;
}
document.getElementById("gameover").style.display = "none";
document.getElementById("winner").style.display = "none";
const countDown = document.getElementById('moneyAmount');
const countDownWin = document.getElementById('moneyAmountWin');
let money = 30000;
const updateMoney = () => {
    money--;
    countDown.innerHTML = `${money}€`;
    countDownWin.innerHTML = `You have ${money}€ in your bank account`;
    if (money <= 0) {
        clearInterval(intervalId);
        gameOver = true;
        document.getElementById("gameover").style.display = "initial";
        document.getElementById("pushToMatrix").disabled = true;
        console.log("gameOver");
        console.log('Game Over!');
        return gameOver;
    }
};
const intervalId = setInterval(updateMoney, 1);
pushToMatrix.addEventListener('click', () => {
    const currentPlayerRow = refreshCurrent();
    if (selectedDificulty == "easy") {
        currentPlayerRow.length = 4;
    }
    const currentCheckRow = checkRow(randomPalette, currentRow);
    tries--;
    if (tries < 0) {
        gameOver = true;
        clearInterval(intervalId);
        document.getElementById("gameover").style.display = "initial";
        document.getElementById("pushToMatrix").disabled = true;
    }
    const win = currentCheckRow.win;
    if (win) {
        document.getElementById("winner").style.display = "initial";
        document.getElementById("pushToMatrix").disabled = true;
        clearInterval(intervalId);
    }
    if (tries <= 0 && win == false) {
        gameOver = true;
        clearInterval(intervalId);
        document.getElementById("gameover").style.display = "initial";
        document.getElementById("pushToMatrix").disabled = true;
    }
    if (gameOver === false && win === false) {
        const blackCol = "#000000";
        const blacksRow = [];
        for (let i = 0; i < currentCheckRow.blacks; i++) {
            blacksRow.push(blackCol);
        }
        const whiteCol = "#FFFFFF";
        const whitesRow = [];
        for (let i = 0; i < currentCheckRow.whites; i++) {
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
