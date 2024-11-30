const data = {
    personalInfo: {
        firstName: "Jan",
        lastName: "Jansen",
        middleName: "van der",
        birthDate: "01-01-1980",
        gender: "Man"
    },
    contactInfo: {
        address: "Hoofdstraat 123",
        zipcode: "1234 AB",
        phone: "0612345678",
        emergency: "0612345678",
        donor: "yes"
    },
    medicalInfo: {
        bloodType: "O+",
        allergies: "Pinda's, Bijensteken",
        conditions: "Astma",
        medication: "Paracetamol, 500 mg, 2x per dag"
    },
    medicalHistory: {
        history: "Hartoperatie, 2015",
        hospitalizations: "Longontsteking, 2018"
    },
    vaccinations: {
        vaccines: [{
            name: "COVID-19 Vaccine",
            date: "2023-01-15"
        }]
    }
};

function addVaccine() {
    const vaccineName = document.getElementById("new-vaccine").value.trim();
    const vaccineDate = document.getElementById("vaccine-date").value.trim();

    if (!vaccineName || !vaccineDate) {
        alert("Vul zowel de naam als de datum van de vaccinatie in.");
        return;
    }

    data.vaccinations.vaccines.push({ name: vaccineName, date: vaccineDate });
    updateVaccineList();

    // Clear input fields
    document.getElementById("new-vaccine").value = '';
    document.getElementById("vaccine-date").value = '';
}

function removeVaccine(index) {
    const vaccine = data.vaccinations.vaccines[index];
    const confirmRemoval = confirm(
        `Weet je zeker dat je vaccinatie "${vaccine.name}" van ${vaccine.date} wilt verwijderen?`
    );

    if (confirmRemoval) {
        data.vaccinations.vaccines.splice(index, 1);
        updateVaccineList();
    }
}

function updateVaccineList() {
    const vaccineList = document.getElementById("vaccination-list");
    vaccineList.innerHTML = ''; // Clear current list

    data.vaccinations.vaccines.forEach((vaccine, index) => {
        const vaccineItem = document.createElement("div");

        // Name and date display
        const vaccineText = document.createElement("span");
        vaccineText.textContent = `${vaccine.name} (${vaccine.date})`;

        // Remove button
        const removeButton = document.createElement("button");
        removeButton.textContent = "X";
        removeButton.onclick = () => removeVaccine(index);

        vaccineItem.appendChild(vaccineText);
        vaccineItem.appendChild(removeButton);
        vaccineList.appendChild(vaccineItem);
    });
}

function loadMedicalData() {
    // Personal Information
    console.log(data.personalInfo);
    document.getElementById("first-name").value = data.personalInfo.firstName;
    document.getElementById("last-name").value = data.personalInfo.lastName || '';
    document.getElementById("middle-name").value = data.personalInfo.middleName || '';
    document.getElementById("birth-date").value = data.personalInfo.birthDate || '';
    document.getElementById("gender").value = data.personalInfo.gender || '';

    // Contact Information
    document.getElementById("address").value = data.contactInfo.address || '';
    document.getElementById("zipcode").value = data.contactInfo.zipcode || '';
    document.getElementById("phone").value = data.contactInfo.phone || '';
    document.getElementById("emergency").value = data.contactInfo.emergency || '';
    document.getElementById("donor").value = data.contactInfo.donor || '';

    // Medical Information
    document.getElementById("blood-type").value = data.medicalInfo.bloodType || '';
    document.getElementById("allergies").value = data.medicalInfo.allergies || '';
    document.getElementById("conditions").value = data.medicalInfo.conditions || '';
    document.getElementById("medication").value = data.medicalInfo.medication || '';

    // Medical History
    document.getElementById("medical-notes").value = data.medicalHistory.history || '';
    document.getElementById("history-notes").value = data.medicalHistory.hospitalizations || '';

    // Vaccinations
    updateVaccineList(); // Update vaccine list dynamically
}

function showPage(pageId) {
    const pages = document.querySelectorAll(".card");
    pages.forEach(page => page.style.display = "none");

    const page = document.getElementById(pageId);
    if (page) {
        page.style.display = "block";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    loadMedicalData(); // Laad de gegevens
    showPage('personal-info'); // Toon de persoonlijke informatiepagina
});