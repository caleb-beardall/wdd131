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
}

/* https://www.indeed.com/career-advice/finding-a-job/biggest-tech-companies-in-utah */

const careers = [
    {
        positionName: "Engineering Manager",
        level: "Advanced",
        company: "Instructure",
        companyRating: 3.8,
        city: "Cottonwood Heights",
        baseSalary: 33000,
        maxSalary: 50000,
        experience: "9 Years",
        type: "Remote",
        schedule: "Full Time",
    },
    {
        positionName: "Data Scientist",
        level: "Expert",
        company: "Ancestry",
        companyRating: 3.8,
        city: "Lehi",
        baseSalary: 114000,
        maxSalary: 131000,
        experience: "10+ Years",
        type: "Remote",
        schedule: "Full Time",
    },
    {
        positionName: "Sr. Software Engineer",
        level: "Expert",
        company: "BambooHR",
        companyRating: 3.9,
        city: "Draper",
        baseSalary: 121000,
        maxSalary: 161000,
        experience: "10+ Years",
        type: "Remote",
        schedule: "Full Time",
    },
    {
        positionName: "Software Engineer",
        level: "Intermediate",
        company: "BambooHR",
        companyRating: 3.9,
        city: "Draper",
        baseSalary: 87000,
        maxSalary: 127000,
        experience: "3 Years",
        type: "Hybrid",
        schedule: "Full Time",
    },
    {
        positionName: "Software Engineer Intern",
        level: "Entry",
        company: "BambooHR",
        companyRating: 3.9,
        city: "Draper",
        baseSalary: 59000,
        maxSalary: 83000,
        experience: "None Required",
        type: "In-Office",
        schedule: "Part Time",
    },
    {
        positionName: "Sr. Software Engineer",
        level: "Advanced",
        company: "Qualtrics",
        companyRating: 3.5,
        city: "Provo",
        baseSalary: 147000,
        maxSalary: 187000,
        experience: "5 Years",
        type: "Hybrid",
        schedule: "Full Time",
    },
    {
        positionName: "Software Engineer",
        level: "Intermediate",
        company: "Qualtrics",
        companyRating: 3.5,
        city: "Provo",
        baseSalary: 100000,
        maxSalary: 140000,
        experience: "2 Years",
        type: "Hybrid",
        schedule: "Full Time",
    },
    {
        positionName: "Software Engineer Intern",
        level: "Entry",
        company: "Qualtrics",
        companyRating: 3.5,
        city: "Provo",
        baseSalary: 62000,
        maxSalary: 105000,
        experience: "1 Year",
        type: "In-Office",
        schedule: "Part Time",
    },
    {
        positionName: "Sr. Engineering Manager",
        level: "Expert",
        company: "Adobe",
        companyRating: 4.3,
        city: "Lehi",
        baseSalary: 130000,
        maxSalary: 250000,
        experience: "10+",
        type: "Remote",
        schedule: "Full Time",
    },
    {
        positionName: "Data Scientist Intern",
        level: "Entry",
        company: "Adobe",
        companyRating: 4.3,
        city: "Lehi",
        baseSalary: 76000,
        maxSalary: 110000,
        experience: "1 Year",
        type: "In-Office",
        schedule: "Full Time",
    },
]

