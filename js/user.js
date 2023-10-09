// user
document.getElementById("enter").disabled = true;
const user = document.getElementById('user')
user.addEventListener('input', () => {
    console.log(user.value);
    if (user.value.length > 1) {
        document.getElementById("enter").disabled = false;
    }
    if (user.value.length > 13) {
        user.value = "Dani Tarazona";
    }
})
const checkEasy = document.getElementById("easy")
const checkHard = document.getElementById("hard")
let dificultSelected = "easy";
if (dificultSelected === "easy"){
    checkEasy.style.backgroundColor = "white";
    checkEasy.style.color = "black";
    checkHard.style.backgroundColor = "black";
    checkHard.style.color = "white";
}
checkEasy.addEventListener("click", (event) => {
    dificultSelected = "easy";
    if (dificultSelected === "easy"){
        checkEasy.style.backgroundColor = "white";
        checkEasy.style.color = "black";
        checkHard.style.backgroundColor = "black";
        checkHard.style.color = "white";
    }
    console.log(dificultSelected);
});
checkHard.addEventListener("click", (event) => {
    dificultSelected = "hard";
    if (dificultSelected === "hard"){
        checkEasy.style.backgroundColor = "black";
        checkEasy.style.color = "white";
        checkHard.style.backgroundColor = "white";
        checkHard.style.color = "black"; 
    }
    console.log(dificultSelected);
});
enter.addEventListener('click', () => {
    localStorage.setItem('user', user.value);
    localStorage.setItem('dificultSelected', dificultSelected);
})
