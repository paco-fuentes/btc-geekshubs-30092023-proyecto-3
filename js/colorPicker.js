const colorSelect1 = document.getElementById('colorSelect1')
const palette1 = document.getElementById('palette1')
const colorSelect2 = document.getElementById('colorSelect2')
const palette2 = document.getElementById('palette2')
const colorSelect3 = document.getElementById('colorSelect3')
const palette3 = document.getElementById('palette3')
const colorSelect4 = document.getElementById('colorSelect4')
const palette4 = document.getElementById('palette4')
const reset = document.getElementById('reset')
const play = document.getElementById('play')
let selectedPalette = [];
colorSelect1.addEventListener('input', () => {
    palette1.style.backgroundColor = colorSelect1.value;
    if (selectedPalette[0] === undefined || selectedPalette[0] === selectedPalette[0]) {
        selectedPalette.splice(0, 1, colorSelect1.value);
    } else {
        selectedPalette.splice(0, 1, colorSelect1.value);
    }
})
colorSelect2.addEventListener('input', () => {
    palette2.style.backgroundColor = colorSelect2.value;
    if (selectedPalette[1] === undefined || selectedPalette[1] === selectedPalette[0]) {
        selectedPalette.splice(1, 1, colorSelect2.value);
    } else {
        selectedPalette.splice(1, 1, colorSelect2.value);
    }
})
colorSelect3.addEventListener('input', () => {
    palette3.style.backgroundColor = colorSelect3.value;
    if (selectedPalette[2] === undefined || selectedPalette[2] === selectedPalette[0]) {
        selectedPalette.splice(2, 1, colorSelect3.value);
    } else {
        selectedPalette.splice(2, 1, colorSelect3.value);
    }
})
colorSelect4.addEventListener('input', () => {
    palette4.style.backgroundColor = colorSelect4.value;
    if (selectedPalette[3] === undefined || selectedPalette[3] === selectedPalette[0]) {
        selectedPalette.splice(3, 1, colorSelect4.value);
    } else {
        selectedPalette.splice(3, 1, colorSelect4.value);
    }
})
reset.addEventListener('click', () => {
    selectedPalette = [];
    palette1.style.backgroundColor = "#000000";
    palette2.style.backgroundColor = "#000000";
    palette3.style.backgroundColor = "#000000";
    palette4.style.backgroundColor = "#000000";
    colorSelect1.value = "#000000";
    colorSelect2.value = "#000000";
    colorSelect3.value = "#000000";
    colorSelect4.value = "#000000";
})
play.addEventListener('click', () => {
    if (selectedPalette.length === 4) {
        localStorage.setItem('selectedPalette', selectedPalette);
        window.location.href = '../pages/game.html';
    }
})
const currentUser = localStorage.getItem("user");
const userDisplay = document.getElementById("userDisplay");
userDisplay.innerHTML = `Welcome, ${currentUser}, please choose four palette colours to play...`;
