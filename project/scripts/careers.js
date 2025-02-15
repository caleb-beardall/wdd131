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

/* Creating the Array
https://www.indeed.com/career-advice/finding-a-job/biggest-tech-companies-in-utah */

const careers = [
    {
        positionName: "Engineering Manager",
        level: "advanced",
        company: "Instructure",
        companyRating: 3.8,
        city: "Cottonwood Heights",
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
        companyRating: 3.8,
        city: "Lehi",
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
        companyRating: 3.9,
        city: "Draper",
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
        companyRating: 3.9,
        city: "Draper",
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
        companyRating: 3.9,
        city: "Draper",
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
        companyRating: 3.5,
        city: "Provo",
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
        companyRating: 3.5,
        city: "Provo",
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
        companyRating: 3.5,
        city: "Provo",
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
        companyRating: 4.3,
        city: "Lehi",
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
        companyRating: 4.3,
        city: "Lehi",
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

        /*
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class"label">Size:</span> ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");
        */

        article.appendChild(positionName);
        article.appendChild(company);
        article.appendChild(salaryRange);
        article.appendChild(summary);

        careersSection.appendChild(article);
    });
};

/* Filtering the Data */



const filterResults = document.getElementById("filter-results");

function filterCareers() {
    if (document.querySelector('input[name="beginner"]:checked') === true) {
        let newCareers = careers.filter(career => career.level === "beginner");
    }

    displayCareers(newCareers);
}

filterResults.addEventListener('click', filterCareers);

displayCareers(careers);
