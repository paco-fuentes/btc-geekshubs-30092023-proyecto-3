document.getElementById("enter").disabled = true;
enter.style.color = "rgba(255,255,255,0.3)";
enter.classList.remove("button");
enter.classList.add("button2");
const user = document.getElementById('user')
user.addEventListener('input', () => {
    if (user.value.length > 0) {
        document.getElementById("enter").disabled = false;
        enter.style.color = "rgba(255,255,255)";
        enter.classList.remove("button2");
        enter.classList.add("button");
    }
    if (user.value.length <= 0) {
        document.getElementById("enter").disabled = true;
        enter.style.color = "rgba(255,255,255, 0.3)"
        enter.classList.remove("button");
        enter.classList.add("button2");
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
});
checkHard.addEventListener("click", (event) => {
    dificultSelected = "hard";
    if (dificultSelected === "hard"){
        checkEasy.style.backgroundColor = "black";
        checkEasy.style.color = "white";
        checkHard.style.backgroundColor = "white";
        checkHard.style.color = "black"; 
    }
});
enter.addEventListener('click', () => {
    localStorage.setItem('user', user.value);
    localStorage.setItem('dificultSelected', dificultSelected);
})
