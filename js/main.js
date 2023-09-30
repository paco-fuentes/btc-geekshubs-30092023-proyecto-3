// color-picker

const colorSelect1 = document.getElementById('colorSelect1')
const palette1 = document.getElementById('palette1')
const colorSelect2 = document.getElementById('colorSelect2')
const palette2 = document.getElementById('palette2')
const colorSelect3 = document.getElementById('colorSelect3')
const palette3 = document.getElementById('palette3')
const colorSelect4 = document.getElementById('colorSelect4')
const palette4 = document.getElementById('palette4')
const resetButton = document.getElementById('resetButton')
let selectedPalette = [];

colorSelect1.addEventListener('input', () => {
    palette1.style.backgroundColor = colorSelect1.value;
    if (selectedPalette[0] === undefined) {
        selectedPalette.push(colorSelect1.value);
    }else if (selectedPalette[0] === selectedPalette[0]){
        selectedPalette.pop();
        selectedPalette.push(colorSelect1.value);
    }
})
colorSelect2.addEventListener('input', () => {
    palette2.style.backgroundColor = colorSelect2.value;
    if (selectedPalette[1] === undefined) {
        selectedPalette.push(colorSelect2.value);
    }else if (selectedPalette[1] === selectedPalette[1]){
        selectedPalette.pop();
        selectedPalette.push(colorSelect2.value);
    }
})
colorSelect3.addEventListener('input', () => {
    palette3.style.backgroundColor = colorSelect3.value;
    if (selectedPalette[2] === undefined) {
        selectedPalette.push(colorSelect3.value);
    }else if (selectedPalette[2] === selectedPalette[2]){
        selectedPalette.pop();
        selectedPalette.push(colorSelect3.value);
    }
})
colorSelect4.addEventListener('input', () => {
    palette4.style.backgroundColor = colorSelect4.value;
    if (selectedPalette[3] === undefined) {
        selectedPalette.push(colorSelect4.value);
    }else if (selectedPalette[3] === selectedPalette[3]){
        selectedPalette.pop();
        selectedPalette.push(colorSelect4.value);
    }
})
console.log(selectedPalette);
resetButton.addEventListener('click', () => {
    // palette1.style.backgroundColor = colorSelect1.value;
    // selectedPalette = [undefined];
})



