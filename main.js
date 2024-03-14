const darkModeSwitch = document.getElementById("darkModeSwitch");
const body = document.body;

const enableDarkMode = () => {
    body.classList.add("dark-mode");
}

const disableDarkMode = () => {
    body.classList.remove("dark-mode");

}

darkModeSwitch.addEventListener("change",() => {
    if(darkModeSwitch.checked) {
    enableDarkMode();
    } else{
    disableDarkMode();
}
})