// <= 10 °C and > 4.8 km/h

// TWC = 13.12 + 0.6215(Ta) - 11.37(v)^0.16 + 0.3965(Ta)(v)^0.16
// TWC = 13.12 + 0.6215(9) -11.37(41)^0.16 + 0.3965(9)(41)^0.16

let temperature = 8;
let windSpeed = 11;

const calculateWindChill = (temperature, windSpeed) => (temperature > 10 || windSpeed <= 4.8) ? "N/A" : (13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temperature * Math.pow(windSpeed, 0.16))).toFixed(1);

document.querySelector('#wind-chill').innerHTML = `${calculateWindChill(temperature, windSpeed)}°C`;


const year = document.querySelector("#year");

const today = new Date();

year.innerHTML = `©<span class="highlight">${today.getFullYear()}</span> | Caleb Beardall | Japan`;

let modDate = document.querySelector("#modified-date");

let oLastModif = new Date(document.lastModified);

modDate.innerHTML = `Last Modification: <span class="highlight">${oLastModif.toLocaleString('de-DE')}</span>`;