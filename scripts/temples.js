const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

const year = document.querySelector("#year");

const today = new Date();

year.innerHTML = `©<span class="highlight">${today.getFullYear()}</span> | Caleb Beardall | Ogden, Utah`;

let modDate = document.querySelector("#modified-date");

let oLastModif = new Date(document.lastModified);

modDate.innerHTML = `Last Modification: <span class="highlight">${oLastModif.toLocaleString('de-DE')}</span>`;