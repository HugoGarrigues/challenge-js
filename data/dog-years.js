const earth = 1;
const mercury = 0.2408467;
const venus = 0.61519726;
const mars = 1.8808158;
const jupiter = 11.862615;
const saturn = 29.447498;
const uranus = 84.016846;
const neptune = 164.79132;

function dogYears(sec, planet) {
    sec /= 31536000;
    age = (sec * planet) * 7;
    return Math.round(age * 100)/100;
}

console.log(dogYears(1000000000, earth))