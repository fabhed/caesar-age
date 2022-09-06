const dateOfBirth = new Date("2022-05-12");
const milliSecondsOld = Date.now() - dateOfBirth.getTime();
console.log("milliseconds old: ", milliSecondsOld);
const averageMonthLength = 30.437; // days

const monthsOld = milliSecondsOld / 1000 / 60 / 60 / 24 / averageMonthLength;
const yearsOld = monthsOld / 12;

document.addEventListener("DOMContentLoaded", () => {
  const yearsOldDiv = document.getElementById("years-old"),
    monthsOldDiv = document.getElementById("months-old"),
    dateOfBirthDiv = document.getElementById("date-of-birth");

  yearsOldDiv.innerText = Math.round(yearsOld * 100) / 100;
  monthsOldDiv.innerText = Math.round(monthsOld * 100) / 100;
  dateOfBirthDiv.innerText = dateOfBirth.toLocaleDateString("sv-SE");
});
