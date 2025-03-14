const data = {
    personalInfo: {
        firstName: "Pieter",
        lastName: "Jansen",
        middleName: "Bob",
        birthDate: "12-06-1999",
        gender: "Man"
    },
    contactInfo: {
        address: "Normannensingel 50",
        zipcode: "6224BW",
        phone: "0612312312",
        emergency: "0645645645",
        donor: "ja"
    },
    medicalInfo: {
        bloodType: "A-",
        allergies: "hooikoorts",
        conditions: "-",
        medication: "-",
        medicalNotes: "-"
    },
    medicalHistory: {
        history: "-",
        hospitalizations: "2x arm operation (2013)",
        historyNotes: "-"
    },
    vaccinations: {
        vaccines: [{
            name: "Rota",
            date: "2008-10-15"
        },
        {
            name: "DKTP-Hib-HepB",
            date: "2008-6-06"
        },
        {
            name: "Pneu",
            date: "2008-10-15"
        },
        {
            name: "BMR",
            date: "2008-01-15"
        },
        {
            name: "MenACWY",
            date: "2008-01-15"
        },
        {
            name: "DKTP",
            date: "2011-01-15"
        },
        {
            name: "DTP",
            date: "2016-01-15"
        },
        {
            name: "BMR",
            date: "2016-01-15"
        },
        {
            name: "HPV",
            date: "20017-01-15"
        },
        {
            name: "MenACWY",
            date: "2021-01-15"
        }]
    },
    lifestyleInfo: {
        smokingStatus: "ja",
        alcoholUse: "meestal",
        diet: "Geen special dieet",
        exercise: "3x per week"
    }
};

// document.addEventListener("DOMContentLoaded", () => {
//     fetch('../JS/data/personal.json')
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error("JSON bestand niet gevonden");
//             }
//             return response.json();
//         })
//         .then(data => {
//             loadMedicalData(data);
//         })
//         .catch(error => console.error("Fout bij laden van gegevens:", error));
// });

function addVaccine() {
    const vaccineName = document.getElementById("new-vaccine").value.trim();
    const vaccineDate = document.getElementById("vaccine-date").value.trim();
    if (!vaccineName || !vaccineDate) return alert("Vul zowel de naam als de datum van de vaccinatie in.");
    data.vaccinations.vaccines.push({ name: vaccineName, date: vaccineDate });
    updateVaccineList();
    document.getElementById("new-vaccine").value = '';
    document.getElementById("vaccine-date").value = '';
}

function removeVaccine(index) {
    const vaccine = data.vaccinations.vaccines[index];
    const confirmRemoval = confirm(`Weet je zeker dat je vaccinatie "${vaccine.name}" van ${vaccine.date} wilt verwijderen?`);
    if (confirmRemoval) {
        data.vaccinations.vaccines.splice(index, 1);
        updateVaccineList();
    }
}

function updateVaccineList() {
    const vaccineList = document.getElementById("vaccination-list");
    vaccineList.innerHTML = '';
    data.vaccinations.vaccines.forEach((vaccine, index) => {
        const vaccineItem = document.createElement("div");

        const vaccineText = document.createElement("span");
        vaccineText.textContent = `${vaccine.name} (${vaccine.date})`;

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
    document.getElementById("medical-notes").value = data.medicalInfo.medicalNotes || '';

    // Medical History
    document.getElementById("history").value = data.medicalHistory.history || '';
    document.getElementById("hospitalizations").value = data.medicalHistory.hospitalizations || '';
    document.getElementById("history-notes").value = data.medicalHistory.historyNotes || '';

    // Lifestyle
    document.getElementById("smoking-status").value = data.lifestyleInfo.smokingStatus || '';
    document.getElementById("alcohol-use").value = data.lifestyleInfo.alcoholUse || '';
    document.getElementById("diet").value = data.lifestyleInfo.diet || '';
    document.getElementById("exercise").value = data.lifestyleInfo.exercise || '';
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
});