// user
document.getElementById("enter").disabled = true;
const user = document.getElementById('user')
user.addEventListener('input', () => {
    console.log(user.value);
    if (user.value.length > 1) {
        document.getElementById("enter").disabled = false;
    }
    if (user.value.length > 13) {
        user.value = "David Ochando";
    }
})

let dificultSelected = "easy";

const checkEasy = document.getElementById("easy")
checkEasy.addEventListener("click", (event) => {
    dificultSelected = "easy";
    console.log(dificultSelected);
});

const checkHard = document.getElementById("hard")
checkHard.addEventListener("click", (event) => {
    dificultSelected = "hard";
    console.log(dificultSelected);
});

// console.log(dificultSelected);

enter.addEventListener('click', () => {
    localStorage.setItem('user', user.value);
    localStorage.setItem('dificultSelected', dificultSelected);
})
