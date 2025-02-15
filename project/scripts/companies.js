/* Creating the array and displaying it
https://www.indeed.com/career-advice/finding-a-job/biggest-tech-companies-in-utah */

const companies = [
    {
        companyName: "Adobe",
        city: "Lehi",
        rating: 4.3,
        sizeMin: 10000,
        sizeMax: 10001,
        founded: 1982,
        revenue: "$5B to $10B",
    },
    {
        companyName: "Voxpopme",
        city: "Salt Lake Cty",
        rating: 4.3,
        sizeMin: 51,
        sizeMax: 200,
        founded: 2013,
        revenue: "$5M to $25M",
    },
    {
        companyName: "DEVMOUNTAIN",
        city: "Provo",
        rating: 4.3,
        sizeMin: 51,
        sizeMax: 200,
        founded: 2013,
        revenue: "$1 to $5M",
    },
    {
        companyName: "Arctic Wolf",
        city: "Pleasant Grove",
        rating: 4.1,
        sizeMin: 51,
        sizeMax: 200,
        founded: 2012,
        revenue: "$5M to $25M",
    },
    {
        companyName: "BambooHR",
        city: "Lindon",
        rating: 3.9,
        sizeMin: 1001,
        sizeMax: 5000,
        founded: 2008,
        revenue: "$100M to $500M",
    },
    {
        companyName: "Ancestry",
        city: "Provo",
        rating: 3.8,
        sizeMin: 1001,
        sizeMax: 5000,
        founded: 1985,
        revenue: "$100M to $500M",
    },
    {
        companyName: "Instructure",
        city: "Salt Lake Cty",
        rating: 3.8,
        sizeMin: 500,
        sizeMax: 1001,
        founded: 2008,
        revenue: "$100M to $500M",
    },
    {
        companyName: "Podium",
        city: "Lehi",
        rating: 3.6,
        sizeMin: 1,
        sizeMax: 10,
        founded: 2014,
        revenue: "$100M to $500M",
    },
    {
        companyName: "Qualtrics",
        city: "Provo",
        rating: 3.5,
        sizeMin: 5001,
        sizeMax: 10000,
        founded: 2002,
        revenue: "$1B to $5B",
    },
    {
        companyName: "Clearlink",
        city: "Draper",
        rating: 2.9,
        sizeMin: 500,
        sizeMax: 1001,
        founded: 2001,
        revenue: "$100M to $500M",
    },
];

function displayCareers(companies) {
    let companiesSection = document.getElementById("companies-grid");
    companiesSection.innerHTML = "";
    companies.forEach(company => {
        let article = document.createElement("article");
        let companyName = document.createElement("h3");
        let rating = document.createElement("p");
        let city = document.createElement("p");
        let summary = document.createElement("p");


        companyName.innerHTML = `${company.companyName}`;

        rating.innerHTML = `${company.rating} ${getStars(company.rating)}`;
        function getStars(rate) {
            let stars = "";

            if (rate === 5) {
                stars = "★★★★☆";
            } else if (rate >= 4) {
                stars = "★★★★☆";
            } else if (rate >= 3) {
                stars = "★★★☆☆";
            } else if (rate >= 2) {
                stars = "★★☆☆☆";
            } else if (rate >= 1) {
                stars = "★☆☆☆☆";
            } else {
                stars = "☆☆☆☆☆";
            }

            return stars;
        }

        city.innerHTML = `${company.city}, UT`

        summary.innerHTML = `This company was founded in ${company.founded}, ${companySize(company.sizeMin, company.sizeMax)}, and is estimated generate ${company.revenue} in revenue.`
        function companySize(first, second) {
            let anwser = "";

            const formatter = new Intl.NumberFormat("en-US", {
                maximumFractionDigits: 0
            });

            if (first >= 10000) {
                anwser = "has over 10,000 employees"
            } else {
                anwser = `has betweeen ${formatter.format(first)} and ${formatter.format(second)} employees`
            }

            return anwser;
        }

        rating.setAttribute("id", "company-rating");

        article.appendChild(companyName);
        article.appendChild(rating);
        article.appendChild(city);
        article.appendChild(summary);

        companiesSection.appendChild(article);
    });
};

displayCareers(companies);

/* Welcome Message */

function welcomeMessage() {
    let message = document.createElement("p");
    let visits = Number(window.localStorage.getItem("visits-ls")) || 0;

    if (visits !== 0) {
        message.innerHTML = `<span class="highlight">Welcome back!</span> As you likely remember, below you'll find our list of some of the highest-rated tech companies found in the Wasatch Front.`;
    } else {
        message.innerHTML = `<span class="highlight">Welcome! Thank you for visiting our Companies page.</span> Below you'll find our list of some of the highest-rated tech companies found in the Wasatch Front.`;
    }

    visits++;

    localStorage.setItem("visits-ls", visits);

    document.getElementById("welcome-container").appendChild(message);
};

welcomeMessage();

/* Footer Content */

const cYear = document.querySelector("#year");
const mDate = document.querySelector("#modified-date");

let copyrightYear = new Date();
let lastModified = new Date(document.lastModified);

cYear.innerHTML = `©<span class="footer">${copyrightYear.getFullYear()}</span> | Caleb Beardall | Ogden, Utah`;
mDate.innerHTML = `Last Modification: <span class="footer">${lastModified.toLocaleString('de-DE')}</span>`;