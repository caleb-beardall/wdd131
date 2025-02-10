const year = document.querySelector("#year");

const today = new Date();

year.innerHTML = `©<span class="highlight">${today.getFullYear()}</span> | Caleb Beardall | Ogden, Utah`;

let modDate = document.querySelector("#modified-date");

let oLastModif = new Date(document.lastModified);

modDate.innerHTML = `Last Modification: <span class="highlight">${oLastModif.toLocaleString('de-DE')}</span>`;

const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

createOptions();

function createOptions() {
    products.forEach(product => {
        let option = document.createElement("option");

        option.textContent = product.name.replace(/\b\w/g, char => char.toUpperCase());
        option.setAttribute("value", product.id);

        document.getElementById("productName").appendChild(option);
    });
}
