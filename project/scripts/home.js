/* Footer Content */

const cYear = document.querySelector("#year");
const mDate = document.querySelector("#modified-date");

let copyrightYear = new Date();
let lastModified = new Date(document.lastModified);

cYear.innerHTML = `©<span class="footer">${copyrightYear.getFullYear()}</span> | Caleb Beardall | Ogden, Utah`;
mDate.innerHTML = `Last Modification: <span class="footer">${lastModified.toLocaleString('de-DE')}</span>`;