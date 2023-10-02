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
enter.addEventListener('click', () => {
    localStorage.setItem('user', user.value);
})
