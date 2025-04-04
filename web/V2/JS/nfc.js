document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener('keydown', function (event) {
        if (event.key !== 'Enter') return;
        document.getElementById('nfc-screen-1').classList.add("hidden-screen");
        // document.getElementById("login-screen").classList.add("active-screen");
    });
});