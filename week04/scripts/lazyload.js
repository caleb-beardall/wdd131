
let modDate = document.querySelector("#modified-date");
let oLastModif = new Date(document.lastModified);

modDate.innerHTML = `Last Modification: <span class="highlight">${oLastModif.toLocaleString('de-DE')}</span>`;