// Gegevens als variabelen
const personalInfo = {
    firstName: "Jan",
    lastName: "Jansen",
    middleName: "van der"
};

const medicalInfo = {
    bloodType: "O+",
    allergies: "Pinda's, Bijensteken"
};

// Dynamisch de gegevens toevoegen aan de HTML
document.getElementById("first-name").textContent = personalInfo.firstName;
document.getElementById("last-name").textContent = personalInfo.lastName;
document.getElementById("middle-name").textContent = personalInfo.middleName;
document.getElementById("blood-type").textContent = medicalInfo.bloodType;
document.getElementById("allergies").textContent = medicalInfo.allergies;
