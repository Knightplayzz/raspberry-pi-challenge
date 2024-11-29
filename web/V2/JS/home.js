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

const medicalHistory = {
    history: "Hartoperatie, 2015",
    hospitalizations: "Longontsteking, 2018"
};

const vaccinations = {
    vaccines: ["BMR, 2020"]
};

function addVaccine() {
    const newVaccine = document.getElementById("new-vaccine").value;
    if (newVaccine) {
        vaccinations.vaccines.push(newVaccine);
        updateVaccineList();
    }
    document.getElementById("new-vaccine").value = '';
}

function removeVaccine(index) {
    vaccinations.vaccines.splice(index, 1);
    updateVaccineList();
}

function updateVaccineList() {
    const vaccineList = document.getElementById("vaccination-list");
    vaccineList.innerHTML = ''; // Clear current list
    vaccinations.vaccines.forEach((vaccine, index) => {
        const vaccineItem = document.createElement("div");
        vaccineItem.innerHTML = `${vaccine} <button onclick="removeVaccine(${index})">Verwijder</button>`;
        vaccineList.appendChild(vaccineItem);
    });
}

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

    document.getElementById("medical-notes").value = "";
    document.getElementById("history-notes").value = "";
}

function showPage(pageId) {
    const pages = document.querySelectorAll(".card");
    pages.forEach(page => page.style.display = "none");

    const page = document.getElementById(pageId);
    if (page) {
        page.style.display = "block";
    }

    if (pageId === 'personal-info') {
        document.getElementById("save-button").style.display = "none";
    } else {
        document.getElementById("save-button").style.display = "inline-block";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    loadMedicalData();
    showPage('personal-info');
});
