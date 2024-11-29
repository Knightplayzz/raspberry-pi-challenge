const personalInfo = {
    firstName: "Jan",
    lastName: "Jansen",
    middleName: "van der",
    birthDate: "01-01-1980",
    gender: "Man"
};

const contactInfo = {
    address: "Hoofdstraat 123",
    zipcode: "1234 AB",
    phone: "0612345678",
    emergency: "0612345678",
    donor: "yes"
};

const medicalInfo = {
    bloodType: "O+",
    allergies: "Pinda's, Bijensteken",
    conditions: "Astma",
    medication: "Paracetamol, 500 mg, 2x per dag"
};

function loadMedicalData() {
    document.getElementById("first-name").textContent = personalInfo.firstName;
    document.getElementById("last-name").textContent = personalInfo.lastName;
    document.getElementById("middle-name").textContent = personalInfo.middleName;
    document.getElementById("birth-date").textContent = personalInfo.birthDate;
    document.getElementById("gender").textContent = personalInfo.gender;

    document.getElementById("address").value = contactInfo.address;
    document.getElementById("zipcode").value = contactInfo.zipcode;
    document.getElementById("phone").value = contactInfo.phone;
    document.getElementById("emergency").value = contactInfo.emergency;

    const donorSelect = document.getElementById("donor");
    donorSelect.value = contactInfo.donor;

    document.getElementById("blood-type").value = medicalInfo.bloodType;
    document.getElementById("allergies").value = medicalInfo.allergies;
    document.getElementById("conditions").value = medicalInfo.conditions;
    document.getElementById("medication").value = medicalInfo.medication;
}

document.getElementById("save-button").addEventListener("click", () => {
    contactInfo.address = document.getElementById("address").value;
    contactInfo.zipcode = document.getElementById("zipcode").value;
    contactInfo.phone = document.getElementById("phone").value;
    contactInfo.emergency = document.getElementById("emergency").value;
    contactInfo.donor = document.getElementById("donor").value;

    medicalInfo.bloodType = document.getElementById("blood-type").value;
    medicalInfo.allergies = document.getElementById("allergies").value;
    medicalInfo.conditions = document.getElementById("conditions").value;
    medicalInfo.medication = document.getElementById("medication").value;

    alert("Gegevens succesvol opgeslagen!");
});

loadMedicalData();
