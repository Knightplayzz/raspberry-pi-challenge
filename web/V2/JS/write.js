document.getElementById("save-button").addEventListener("click", function () {
    const vaccineList = [];
    document.querySelectorAll("#vaccination-list div").forEach((vaccine) => {
        // Extract the vaccine name and date
        const text = vaccine.textContent.trim();
        const match = text.match(/^(.+?)\s\((.+?)\)X$/);
        if (match) {
            vaccineList.push({
                vaccine: match[1],
                date: match[2]
            });
        }
    });

    const data = {
        personalInfo: {
            firstName: document.getElementById("first-name").textContent,
            lastName: document.getElementById("last-name").textContent,
            middleName: document.getElementById("middle-name").textContent,
            birthDate: document.getElementById("birth-date").textContent,
            gender: document.getElementById("gender").textContent
        },
        contactInfo: {
            address: document.getElementById("address").value,
            zipcode: document.getElementById("zipcode").value,
            phone: document.getElementById("phone").value,
            emergency: document.getElementById("emergency").value
        },
        medicalInfo: {
            bloodType: document.getElementById("blood-type").value,
            donorStatus: document.getElementById("donor").value,
            allergies: document.getElementById("allergies").value,
            conditions: document.getElementById("conditions").value,
            medication: document.getElementById("medication").value,
            medicalNotes: document.getElementById("medical-notes").value
        },
        medicalHistory: {
            history: document.getElementById("history").value,
            hospitalizations: document.getElementById("hospitalizations").value,
            historyNotes: document.getElementById("history-notes").value
        },
        vaccinationInfo: vaccineList,
        lifestyleInfo: {
            smokingStatus: document.getElementById("smoking-status").value,
            alcoholUse: document.getElementById("alcohol-use").value,
            diet: document.getElementById("diet").value,
            exercise: document.getElementById("exercise").value
        }
    };

    console.log(data);
});
