//user
const user = document.getElementById('user')
user.addEventListener('input', () => {
    console.log(user.value);
})


// const userSize = user.getElementById("user").maxLength;
// console.log(userSize);
document.getElementById("enter").disabled = true;
enter.addEventListener('click', () => {
    localStorage.setItem('user', user.value);
    console.log(localStorage.getItem("user", user.value));
})

// document.getElementById("enter").disabled = true;
// var x = document.getElementById("myText").maxLength;

// ----------------------------------------------------------------
