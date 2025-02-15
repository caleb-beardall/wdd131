/* Base Salary Range */

const rangeValue = document.getElementById("user-salary");
const range = document.getElementById("base-salary");

rangeValue.innerHTML = `$50,000`;

range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

const formattedAmount = (amount) => new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
}).format(amount);

function displayRatingValue() {
    if (range.value < 100000) {
        rangeValue.innerHTML = `${formattedAmount(range.value)}`;
    } else {
        rangeValue.innerHTML = `${formattedAmount(range.value)}+`;
    }
};

/* Creating the array and displaying it
https://www.indeed.com/career-advice/finding-a-job/biggest-tech-companies-in-utah */

const careers = [
    {
        positionName: "Engineering Manager",
        level: "advanced",
        company: "Instructure",
        baseSalary: 33000,
        maxSalary: 50000,
        experience: "9",
        workEnvironment: "remote",
        schedule: "full-time",
    },
    {
        positionName: "Data Scientist",
        level: "expert",
        company: "Ancestry",
        baseSalary: 114000,
        maxSalary: 131000,
        experience: "10+",
        workEnvironment: "remote",
        schedule: "full-time",
    },
    {
        positionName: "Sr. Software Engineer",
        level: "expert",
        company: "BambooHR",
        baseSalary: 121000,
        maxSalary: 161000,
        experience: "10+",
        workEnvironment: "remote",
        schedule: "full-time",
    },
    {
        positionName: "Software Engineer",
        level: "mid",
        company: "BambooHR",
        baseSalary: 87000,
        maxSalary: 127000,
        experience: "3",
        workEnvironment: "hybrid",
        schedule: "full-time",
    },
    {
        positionName: "Software Engineer Intern",
        level: "entry",
        company: "BambooHR",
        baseSalary: 59000,
        maxSalary: 83000,
        experience: "0",
        workEnvironment: "in-office",
        schedule: "part-time",
    },
    {
        positionName: "Sr. Software Engineer",
        level: "advanced",
        company: "Qualtrics",
        baseSalary: 147000,
        maxSalary: 187000,
        experience: "5",
        workEnvironment: "hybrid",
        schedule: "full-time",
    },
    {
        positionName: "Software Engineer",
        level: "mid",
        company: "Qualtrics",
        baseSalary: 100000,
        maxSalary: 140000,
        experience: "2",
        workEnvironment: "hybrid",
        schedule: "full-time",
    },
    {
        positionName: "Software Engineer Intern",
        level: "entry",
        company: "Qualtrics",
        baseSalary: 62000,
        maxSalary: 105000,
        experience: "1",
        workEnvironment: "in-office",
        schedule: "part-time",
    },
    {
        positionName: "Sr. Engineering Manager",
        level: "expert",
        company: "Adobe",
        baseSalary: 130000,
        maxSalary: 250000,
        experience: "10+",
        workEnvironment: "remote",
        schedule: "full-time",
    },
    {
        positionName: "Data Scientist Intern",
        level: "entry",
        company: "Adobe",
        baseSalary: 76000,
        maxSalary: 110000,
        experience: "1",
        workEnvironment: "in-office",
        schedule: "full-time",
    },
];

function displayCareers(careers) {
    let careersSection = document.getElementById("careers-grid");
    careersSection.innerHTML = "";
    careers.forEach(career => {
        let article = document.createElement("article");
        let positionName = document.createElement("h3");
        let company = document.createElement("p");
        let salaryRange = document.createElement("p");
        let summary = document.createElement("p");

        positionName.innerHTML = `${career.positionName}`;
        company.innerHTML = `${career.company}`;
        company.setAttribute("id", "company-name");
        salaryRange.innerHTML = `${formattedAmount(career.baseSalary)} - ${formattedAmount(career.maxSalary)}`;
        salaryRange.setAttribute("id", "career-salary");
        summary.innerHTML = `This ${career.level}-level position requires ${career.experience} year(s) of experiance. You can expect a(n) ${career.workEnvironment} work environment and ${career.schedule} schedule.`

        article.appendChild(positionName);
        article.appendChild(company);
        article.appendChild(salaryRange);
        article.appendChild(summary);

        careersSection.appendChild(article);
    });
};

displayCareers(careers);

/* Filtering the Data */

const isBeginnerChecked = document.getElementById("beginner");
const isIntermediateCheck = document.getElementById("intermediate");
const isAdvancedChecked = document.getElementById("advanced");
const isExpertChecked = document.getElementById("expert");

/*
isBeginnerChecked.addEventListener('change', () => {
    isBeginnerChecked.classList.toggle("checked");
});

isIntermediateCheck.addEventListener('change', () => {
    isIntermediateCheck.classList.toggle("checked");
});

isAdvancedChecked.addEventListener('change', () => {
    isAdvancedChecked.classList.toggle("checked");
});

isExpertChecked.addEventListener('change', () => {
    isExpertChecked.classList.toggle("checked");
});
*/

function filterCareers(array) {

    let beginnerCareers = [];
    let intermediateCareers = [];
    let advancedCareers = [];
    let expertCareers = [];

    let careersSection = document.getElementById("careers-grid");
    let noResults = document.createElement("p");

    /*
    if (isBeginnerChecked.classList.contains("checked")) {
        beginnerCareers = array.filter(career => career.level === "entry");
    }

    if (isIntermediateCheck.classList.contains("checked")) {
        intermediateCareers = array.filter(career => career.level === "mid");
    }

    if (isAdvancedChecked.classList.contains("checked")) {
        advancedCareers = array.filter(career => career.level === "advanced");
    }

    if (isExpertChecked.classList.contains("checked")) {
        expertCareers = array.filter(career => career.level === "expert");
    }
    */

    if (isBeginnerChecked.checked) {
        beginnerCareers = array.filter(career => career.level === "entry");
    }

    if (isIntermediateCheck.checked) {
        intermediateCareers = array.filter(career => career.level === "mid");
    }

    if (isAdvancedChecked.checked) {
        advancedCareers = array.filter(career => career.level === "advanced");
    }

    if (isExpertChecked.checked) {
        expertCareers = array.filter(career => career.level === "expert");
    }

    const careerLevels = beginnerCareers.concat(intermediateCareers, advancedCareers, expertCareers);

    const finalCareers = careerLevels.filter(career => career.baseSalary >= range.value);

    if (finalCareers.length === 0) {

        careersSection.innerHTML = "";

        noResults.textContent = "We're sorry. We wouldn't find any results that match your preferences.";
        noResults.setAttribute("id", "noResults");
        careersSection.appendChild(noResults);

    } else {
        displayCareers(finalCareers);
    }
};

const filterResults = document.getElementById("filter-results");

filterResults.addEventListener('click', () => {
    filterCareers(careers);
});

/* Footer Content */

const cYear = document.querySelector("#year");
const mDate = document.querySelector("#modified-date");

let copyrightYear = new Date();
let lastModified = new Date(document.lastModified);

cYear.innerHTML = `©<span class="footer">${copyrightYear.getFullYear()}</span> | Caleb Beardall | Ogden, Utah`;
mDate.innerHTML = `Last Modification: <span class="footer">${lastModified.toLocaleString('de-DE')}</span>`;