const languageSelect = document.getElementById("language")
const flags = document.getElementById("flags")
const languageFile = {
    "nl": {
        "title": "Medische Gegevens",
        "card_title_1": "Persoonlijke Informatie",
        "card_title_2": "Contactgegevens",
        "card_title_3": "Medische Informatie",
        "card_title_4": "Medische Geschiedenis",
        "card_title_5": "Vaccinaties",
        "card_title_6": "Leefstijl",
        "text_1": "Naam:",
        "text_2": "Middel Naam:",
        "text_3": "Achternaam:",
        "text_4": "Geboortedatum:",
        "text_5": "Geslacht:",
        "text_6": "Onbekend",
        "text_7": "Man",
        "text_8": "Vrouw",
        "text_9": "Intersex",
        "text_10": "Adres:",
        "text_11": "Postcode:",
        "text_12": "Telefoonnummer:",
        "text_13": "Noodgevalnummer:",
        "text_14": "Bloedgroep:",
        "text_15": "Onbekend",
        "text_16": "Donorstatus:",
        "text_17": "Onbekend",
        "text_18": "Ja",
        "text_19": "Nee",
        "text_20": "Allergieën:",
        "text_21": "Medische Condities:",
        "text_22": "Medicatie:",
        "text_23": "Opmerkingen:",
        "text_24": "Eerdere Operaties:",
        "text_25": "Ziekenhuisopnames:",
        "text_26": "Opmerkingen:",
        "text_27": "Nieuwe vaccinatie:",
        "text_28": "Datum vaccinatie:",
        "text_29": "Voeg vaccinatie toe",
        "text_30": "Rookt u?",
        "text_31": "Onbekend",
        "text_32": "Ja",
        "text_33": "Af en toe",
        "text_34": "Nee",
        "text_35": "Alcoholgebruik:",
        "text_36": "Onbekend",
        "text_37": "Regelmatig",
        "text_38": "Af en toe",
        "text_39": "Zelden",
        "text_40": "Dieetvoorkeuren:",
        "text_41": "Beweging:",
        "text_42": "Opslaan",
        "allergies": "Pinda's, Schaaldieren",
        "conditions": "Astma, Hypertensie",
        "medical_notes": "Patiënt vereist regelmatige controle voor astmasymptomen.",
        "history": "Geen significante medische familiegeschiedenis. Niet-roker.",
        "hospitalizations": "2019 - Chirurgie voor blindedarmontsteking, 2022 - Behandeling voor longontsteking",
        "history_notes": "Patiënt had een milde allergische reactie op bijensteken op 10-jarige leeftijd.",
        "diet": "Weinig zout, veel vezels, vegetarisch",
        "exercise": "Wandelt dagelijks 30 minuten, yoga drie keer per week"
    },
    "gb": {
        "title": "Medical Information",
        "card_title_1": "Personal Information",
        "card_title_2": "Contact Details",
        "card_title_3": "Medical Information",
        "card_title_4": "Medical History",
        "card_title_5": "Vaccinations",
        "card_title_6": "Lifestyle",
        "text_1": "Name:",
        "text_2": "Middle Name:",
        "text_3": "Sirname:",
        "text_4": "Date of birth:",
        "text_5": "Gender:",
        "text_6": "Unknown",
        "text_7": "Man",
        "text_8": "Woman",
        "text_9": "Intersex",
        "text_10": "Adress:",
        "text_11": "Zipcode:",
        "text_12": "Telephone number:",
        "text_13": "Emergengy number:",
        "text_14": "Blood Type:",
        "text_15": "Unknown",
        "text_16": "Donor Status:",
        "text_17": "Unknown",
        "text_18": "Yes",
        "text_19": "No",
        "text_20": "Allergies:",
        "text_21": "Medical Conditions:",
        "text_22": "Medication:",
        "text_23": "Notes:",
        "text_24": "Previous Surgeries:",
        "text_25": "Hospitalizations:",
        "text_26": "Notes:",
        "text_27": "New Vaccine:",
        "text_28": "Vaccination Date:",
        "text_29": "Add Vaccine",
        "text_30": "Do you smoke?",
        "text_31": "Unknown",
        "text_32": "Yes",
        "text_33": "Occasionally",
        "text_34": "No",
        "text_35": "Alcohol use:",
        "text_36": "Unknown",
        "text_37": "Frequently",
        "text_38": "Occasionally",
        "text_39": "Rarely",
        "text_40": "Diet preferences:",
        "text_41": "Exercise:",
        "text_42": "Save",
        "allergies": "Peanuts, Shellfish",
        "conditions": "Asthma, Hypertension",
        "medical_notes": "Patient requires regular monitoring for asthma symptoms.",
        "history": "No significant family medical history. Non-smoker.",
        "hospitalizations": "2019 - Surgery for appendicitis, 2022 - Treatment for pneumonia",
        "history_notes": "Patient had a mild allergic reaction to bee stings at age 10.",
        "diet": "Low sodium, high fiber, vegetarian",
        "exercise": "Walks 30 minutes daily, yoga three times a week"
    },
    "de": {
        "title": "Medizinische Informationen",
        "card_title_1": "Persönliche Informationen",
        "card_title_2": "Kontaktdaten",
        "card_title_3": "Medizinische Informationen",
        "card_title_4": "Medizinische Vorgeschichte",
        "card_title_5": "Impfungen",
        "card_title_6": "Lebensstil",
        "text_1": "Name:",
        "text_2": "Zweiter Vorname:",
        "text_3": "Nachname:",
        "text_4": "Geburtsdatum:",
        "text_5": "Geschlecht:",
        "text_6": "Unbekannt",
        "text_7": "Mann",
        "text_8": "Frau",
        "text_9": "Intersex",
        "text_10": "Adresse:",
        "text_11": "Postleitzahl:",
        "text_12": "Telefonnummer:",
        "text_13": "Notfallnummer:",
        "text_14": "Blutgruppe:",
        "text_15": "Unbekannt",
        "text_16": "Spenderstatus:",
        "text_17": "Unbekannt",
        "text_18": "Ja",
        "text_19": "Nein",
        "text_20": "Allergien:",
        "text_21": "Erkrankungen:",
        "text_22": "Medikamente:",
        "text_23": "Anmerkungen:",
        "text_24": "Frühere Operationen:",
        "text_25": "Krankenhausaufenthalte:",
        "text_26": "Anmerkungen:",
        "text_27": "Neue Impfung:",
        "text_28": "Impftermin:",
        "text_29": "Impfung hinzufügen",
        "text_30": "Rauchen Sie?",
        "text_31": "Unbekannt",
        "text_32": "Ja",
        "text_33": "Gelegentlich",
        "text_34": "Nein",
        "text_35": "Alkoholkonsum:",
        "text_36": "Unbekannt",
        "text_37": "Häufig",
        "text_38": "Gelegentlich",
        "text_39": "Selten",
        "text_40": "Ernährungsgewohnheiten:",
        "text_41": "Bewegung:",
        "text_42": "Speichern",
        "allergies": "Erdnüsse, Schalentiere",
        "conditions": "Asthma, Bluthochdruck",
        "medical_notes": "Der Patient benötigt regelmäßige Überwachung der Asthmasymptome.",
        "history": "Keine signifikante familiäre Krankengeschichte. Nichtraucher.",
        "hospitalizations": "2019 - Operation wegen Blinddarmentzündung, 2022 - Behandlung wegen Lungenentzündung",
        "history_notes": "Der Patient hatte im Alter von 10 Jahren eine leichte allergische Reaktion auf Bienenstiche.",
        "diet": "Wenig Salz, viel Ballaststoffe, vegetarisch",
        "exercise": "Tägliche Spaziergänge von 30 Minuten, Yoga dreimal pro Woche"
    },
    "fr": {
        "title": "Informations médicales",
        "card_title_1": "Informations personnelles",
        "card_title_2": "Coordonnées",
        "card_title_3": "Informations médicales",
        "card_title_4": "Antécédents médicaux",
        "card_title_5": "Vaccinations",
        "card_title_6": "Mode de vie",
        "text_1": "Nom :",
        "text_2": "Deuxième prénom :",
        "text_3": "Nom de famille :",
        "text_4": "Date de naissance :",
        "text_5": "Genre :",
        "text_6": "Inconnu",
        "text_7": "Homme",
        "text_8": "Femme",
        "text_9": "Intersexe",
        "text_10": "Adresse :",
        "text_11": "Code postal :",
        "text_12": "Numéro de téléphone :",
        "text_13": "Numéro d'urgence :",
        "text_14": "Groupe sanguin :",
        "text_15": "Inconnu",
        "text_16": "Statut de donneur :",
        "text_17": "Inconnu",
        "text_18": "Oui",
        "text_19": "Non",
        "text_20": "Allergies :",
        "text_21": "Conditions médicales :",
        "text_22": "Médicaments :",
        "text_23": "Remarques :",
        "text_24": "Chirurgies précédentes :",
        "text_25": "Hospitalisations :",
        "text_26": "Remarques :",
        "text_27": "Nouveau vaccin :",
        "text_28": "Date de vaccination :",
        "text_29": "Ajouter un vaccin",
        "text_30": "Fumez-vous ?",
        "text_31": "Inconnu",
        "text_32": "Oui",
        "text_33": "Occasionnellement",
        "text_34": "Non",
        "text_35": "Consommation d'alcool :",
        "text_36": "Inconnu",
        "text_37": "Fréquemment",
        "text_38": "Occasionnellement",
        "text_39": "Rarement",
        "text_40": "Préférences alimentaires :",
        "text_41": "Exercice physique :",
        "text_42": "Enregistrer",
        "allergies": "Arachides, Fruits de mer",
        "conditions": "Asthme, Hypertension",
        "medical_notes": "Le patient nécessite une surveillance régulière des symptômes de l'asthme.",
        "history": "Aucune histoire médicale familiale significative. Non-fumeur.",
        "hospitalizations": "2019 - Chirurgie pour appendicite, 2022 - Traitement pour pneumonie",
        "history_notes": "Le patient a eu une réaction allergique légère aux piqûres d'abeilles à l'âge de 10 ans.",
        "diet": "Faible en sel, riche en fibres, végétarien",
        "exercise": "Marche 30 minutes chaque jour, yoga trois fois par semaine"
    },
    "es": {
        "title": "Información médica",
        "card_title_1": "Información personal",
        "card_title_2": "Detalles de contacto",
        "card_title_3": "Información médica",
        "card_title_4": "Historial médico",
        "card_title_5": "Vacunas",
        "card_title_6": "Estilo de vida",
        "text_1": "Nombre:",
        "text_2": "Segundo nombre:",
        "text_3": "Apellido:",
        "text_4": "Fecha de nacimiento:",
        "text_5": "Género:",
        "text_6": "Desconocido",
        "text_7": "Hombre",
        "text_8": "Mujer",
        "text_9": "Intersexual",
        "text_10": "Dirección:",
        "text_11": "Código postal:",
        "text_12": "Número de teléfono:",
        "text_13": "Número de emergencia:",
        "text_14": "Tipo de sangre:",
        "text_15": "Desconocido",
        "text_16": "Estado de donante:",
        "text_17": "Desconocido",
        "text_18": "Sí",
        "text_19": "No",
        "text_20": "Alergias:",
        "text_21": "Enfermedades:",
        "text_22": "Medicamentos:",
        "text_23": "Notas:",
        "text_24": "Cirugías previas:",
        "text_25": "Hospitalizaciones:",
        "text_26": "Notas:",
        "text_27": "Nueva vacuna:",
        "text_28": "Fecha de vacunación:",
        "text_29": "Agregar vacuna",
        "text_30": "¿Fumas?",
        "text_31": "Desconocido",
        "text_32": "Sí",
        "text_33": "Ocasionalmente",
        "text_34": "No",
        "text_35": "Consumo de alcohol:",
        "text_36": "Desconocido",
        "text_37": "Frecuentemente",
        "text_38": "Ocasionalmente",
        "text_39": "Raramente",
        "text_40": "Preferencias alimenticias:",
        "text_41": "Ejercicio:",
        "text_42": "Guardar",
        "allergies": "Cacahuetes, Mariscos",
        "conditions": "Asma, Hipertensión",
        "medical_notes": "El paciente necesita monitoreo regular de los síntomas del asma.",
        "history": "No hay antecedentes médicos familiares significativos. No fumador.",
        "hospitalizations": "2019 - Cirugía por apendicitis, 2022 - Tratamiento para neumonía",
        "history_notes": "El paciente tuvo una reacción alérgica leve a las picaduras de abejas a los 10 años.",
        "diet": "Bajo en sodio, alto en fibra, vegetariano",
        "exercise": "Camina 30 minutos diarios, yoga tres veces por semana"
    },
    "it": {
        "title": "Informazioni mediche",
        "card_title_1": "Informazioni personali",
        "card_title_2": "Dettagli di contatto",
        "card_title_3": "Informazioni mediche",
        "card_title_4": "Anamnesi",
        "card_title_5": "Vaccinazioni",
        "card_title_6": "Stile di vita",
        "text_1": "Nome:",
        "text_2": "Secondo nome:",
        "text_3": "Cognome:",
        "text_4": "Data di nascita:",
        "text_5": "Genere:",
        "text_6": "Sconosciuto",
        "text_7": "Uomo",
        "text_8": "Donna",
        "text_9": "Intersessuale",
        "text_10": "Indirizzo:",
        "text_11": "Codice postale:",
        "text_12": "Numero di telefono:",
        "text_13": "Numero di emergenza:",
        "text_14": "Gruppo sanguigno:",
        "text_15": "Sconosciuto",
        "text_16": "Stato di donatore:",
        "text_17": "Sconosciuto",
        "text_18": "Sì",
        "text_19": "No",
        "text_20": "Allergie:",
        "text_21": "Condizioni mediche:",
        "text_22": "Farmaci:",
        "text_23": "Note:",
        "text_24": "Interventi chirurgici precedenti:",
        "text_25": "Ospedalizzazioni:",
        "text_26": "Note:",
        "text_27": "Nuovo vaccino:",
        "text_28": "Data della vaccinazione:",
        "text_29": "Aggiungi vaccino",
        "text_30": "Fumi?",
        "text_31": "Sconosciuto",
        "text_32": "Sì",
        "text_33": "Occasionalmente",
        "text_34": "No",
        "text_35": "Consumo di alcol:",
        "text_36": "Sconosciuto",
        "text_37": "Frequentemente",
        "text_38": "Occasionalmente",
        "text_39": "Raramente",
        "text_40": "Preferenze alimentari:",
        "text_41": "Esercizio fisico:",
        "text_42": "Salva",
        "allergies": "Arachidi, Crostacei",
        "conditions": "Asma, Ipertensione",
        "medical_notes": "Il paziente necessita di monitoraggio regolare per i sintomi dell'asma.",
        "history": "Nessuna storia medica familiare significativa. Non fumatore.",
        "hospitalizations": "2019 - Chirurgia per appendicite, 2022 - Trattamento per polmonite",
        "history_notes": "Il paziente ha avuto una leggera reazione allergica alle punture di api all'età di 10 anni.",
        "diet": "Basso contenuto di sodio, alta fibra, vegetariano",
        "exercise": "Cammina 30 minuti al giorno, yoga tre volte a settimana"
    }
};

const title = document.getElementById("title");
const card_title_1 = document.getElementById("card-title-1");
const card_title_2 = document.getElementById("card-title-2");
const card_title_3 = document.getElementById("card-title-3");
const card_title_4 = document.getElementById("card-title-4");
const card_title_5 = document.getElementById("card-title-5");
const text_1 = document.getElementById("text-1");
const text_2 = document.getElementById("text-2");
const text_3 = document.getElementById("text-3");
const text_4 = document.getElementById("text-4");
const text_5 = document.getElementById("text-5");
const text_6 = document.getElementById("text-6");
const text_7 = document.getElementById("text-7");
const text_8 = document.getElementById("text-8");
const text_9 = document.getElementById("text-9");
const text_10 = document.getElementById("text-10");
const text_11 = document.getElementById("text-11");
const text_12 = document.getElementById("text-12");
const text_13 = document.getElementById("text-13");
const text_14 = document.getElementById("text-14");
const text_15 = document.getElementById("text-15");
const text_16 = document.getElementById("text-16");
const text_17 = document.getElementById("text-17");
const text_18 = document.getElementById("text-18");
const text_19 = document.getElementById("text-19");
const text_20 = document.getElementById("text-20");
const text_21 = document.getElementById("text-21");
const text_22 = document.getElementById("text-22");
const text_23 = document.getElementById("text-23");
const text_24 = document.getElementById("text-24");
const text_25 = document.getElementById("text-25");
const text_26 = document.getElementById("text-26");
const text_27 = document.getElementById("text-27");
const text_28 = document.getElementById("text-28");
const text_29 = document.getElementById("text-29");
const text_30 = document.getElementById("text-30");
const text_31 = document.getElementById("text-31");
const text_32 = document.getElementById("text-32");
const text_33 = document.getElementById("text-33");
const text_34 = document.getElementById("text-34");
const text_35 = document.getElementById("text-35");
const text_36 = document.getElementById("text-36");
const text_37 = document.getElementById("text-37");
const text_38 = document.getElementById("text-38");
const text_39 = document.getElementById("text-39");
const text_40 = document.getElementById("text-40");
const text_41 = document.getElementById("text-41");

const save_btn = document.getElementById("save-button");

const sidebar_1 = document.getElementById("sidebar-1");
const sidebar_2 = document.getElementById("sidebar-2");
const sidebar_3 = document.getElementById("sidebar-3");
const sidebar_4 = document.getElementById("sidebar-4");
const sidebar_5 = document.getElementById("sidebar-5");
const sidebar_6 = document.getElementById("sidebar-6");

const allergies = document.getElementById("allergies");
const conditions = document.getElementById("conditions");
const medical_notes = document.getElementById("medical-notes");
const history = document.getElementById("history");
const hospitalizations = document.getElementById("hospitalizations");
const history_notes = document.getElementById("history-notes");
const diet = document.getElementById("diet");
const exercise = document.getElementById("exercise")

function setFlag(language) {
    flags.src = `https://flagcdn.com/w40/${language}.png`;
}

function setText(lang) {
    title.textContent = languageFile[lang].title
    card_title_1.textContent = languageFile[lang].card_title_1;
    card_title_2.textContent = languageFile[lang].card_title_2;
    card_title_3.textContent = languageFile[lang].card_title_3;
    card_title_4.textContent = languageFile[lang].card_title_4;
    card_title_5.textContent = languageFile[lang].card_title_5;
    sidebar_1.textContent = languageFile[lang].card_title_1;
    sidebar_2.textContent = languageFile[lang].card_title_2;
    sidebar_3.textContent = languageFile[lang].card_title_3;
    sidebar_4.textContent = languageFile[lang].card_title_4;
    sidebar_5.textContent = languageFile[lang].card_title_5;
    sidebar_6.textContent = languageFile[lang].card_title_6;

    text_1.textContent = languageFile[lang].text_1;
    text_2.textContent = languageFile[lang].text_2;
    text_3.textContent = languageFile[lang].text_3;
    text_4.textContent = languageFile[lang].text_4;
    text_5.textContent = languageFile[lang].text_5;
    text_6.textContent = languageFile[lang].text_6;
    text_7.textContent = languageFile[lang].text_7;
    text_8.textContent = languageFile[lang].text_8;
    text_9.textContent = languageFile[lang].text_9;
    text_10.textContent = languageFile[lang].text_10;
    text_11.textContent = languageFile[lang].text_11;
    text_12.textContent = languageFile[lang].text_12;
    text_13.textContent = languageFile[lang].text_13;
    text_14.textContent = languageFile[lang].text_14;
    text_15.textContent = languageFile[lang].text_15;
    text_16.textContent = languageFile[lang].text_16;
    text_17.textContent = languageFile[lang].text_17;
    text_18.textContent = languageFile[lang].text_18;
    text_19.textContent = languageFile[lang].text_19;
    text_20.textContent = languageFile[lang].text_20;
    text_21.textContent = languageFile[lang].text_21;
    text_22.textContent = languageFile[lang].text_22;
    text_23.textContent = languageFile[lang].text_23;
    text_24.textContent = languageFile[lang].text_24;
    text_25.textContent = languageFile[lang].text_25;
    text_26.textContent = languageFile[lang].text_26;
    text_27.textContent = languageFile[lang].text_27;
    text_28.textContent = languageFile[lang].text_28;
    text_29.textContent = languageFile[lang].text_29;
    text_30.textContent = languageFile[lang].text_30;
    text_31.textContent = languageFile[lang].text_31;
    text_32.textContent = languageFile[lang].text_32;
    text_33.textContent = languageFile[lang].text_33;
    text_34.textContent = languageFile[lang].text_34;
    text_35.textContent = languageFile[lang].text_35;
    text_36.textContent = languageFile[lang].text_36;
    text_37.textContent = languageFile[lang].text_37;
    text_38.textContent = languageFile[lang].text_38;
    text_39.textContent = languageFile[lang].text_39;
    text_40.textContent = languageFile[lang].text_40;
    text_41.textContent = languageFile[lang].text_41;
    save_btn.textContent = languageFile[lang].text_42;

    allergies.value = languageFile[lang].allergies;
    conditions.value = languageFile[lang].conditions;
    medical_notes.value = languageFile[lang].medical_notes;
    history.value = languageFile[lang].history;
    hospitalizations.value = languageFile[lang].hospitalizations;
    history_notes.value = languageFile[lang].history_notes;
    diet.value = languageFile[lang].diet;
    exercise.value = languageFile[lang].exercise;
}

languageSelect.addEventListener('click', () => {
    const selectedValue = languageSelect.value;
    setFlag(selectedValue)
    setText(selectedValue)
});

setFlag("nl");
setText("nl");