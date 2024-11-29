// The correct pincode for login (you can change it as needed)
const correctPincode = '1234'; // Replace with the actual pincode

// Get references to the elements
const pincodeForm = document.getElementById('pincode-form');
const pincodeInput = document.getElementById('pincode');
const loginSection = document.getElementById('login-section');
const contentSection = document.getElementById('content-section');
const loginError = document.getElementById('login-error');

// Event listener for pincode form submission
pincodeForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Check if the entered pincode is correct
    if (pincodeInput.value === correctPincode) {
        // If correct, hide login section and show the content section
        loginSection.style.display = 'none';
        contentSection.style.display = 'block';
    } else {
        // If incorrect, display an error message
        loginError.style.display = 'block';
    }
});