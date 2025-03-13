document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        document.getElementById('nfc-screen-1').classList.add("hidden-screen");
        document.getElementById("login-screen").classList.add("active-screen");
    }, 2000);
});