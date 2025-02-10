const year = document.querySelector("#year");

const today = new Date();

year.innerHTML = `©<span class="highlight">${today.getFullYear()}</span> | Caleb Beardall | Ogden, Utah`;

let modDate = document.querySelector("#modified-date");

let oLastModif = new Date(document.lastModified);

modDate.innerHTML = `Last Modification: <span class="highlight">${oLastModif.toLocaleString('de-DE')}</span>`;

trackReviews();

function trackReviews() {
    let para = document.createElement("p");
    let numReviews = Number(window.localStorage.getItem("numReviews-ls")) || 0;

    if (numReviews !== 0) {
        para.innerHTML = `Including this review, you have left ${numReviews + 1} reviews.`
    } else {
        para.textContent = `Thank you for leaving your first review!`;
    }

    numReviews++;

    localStorage.setItem("numReviews-ls", numReviews);

    document.getElementById("reviews").appendChild(para);
}