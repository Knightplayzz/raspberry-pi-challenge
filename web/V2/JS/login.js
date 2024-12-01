const correctPincode = '1234';
const loginError = document.getElementById('login-error');

document.getElementById('pincode-form').addEventListener('submit', function (event) {
    event.preventDefault();
    if (document.getElementById('pincode').value === correctPincode) {
        document.getElementById('login-section').classList.add("hidden-screen");
        loginError.style.display = 'none';

        //start scanning code
        document.getElementById('nfc-screen-2').classList.add("show");
        setTimeout(() => {
            document.getElementById('nfc-screen-2').classList.remove("show");
            document.getElementById('nfc-screen-2').classList.add("hidden-screen");
            document.getElementById('content-section').style.display = "block";
            document.getElementById('personal-info').style.display = "block";
        }, 5000);
    } else loginError.style.display = 'block';
});