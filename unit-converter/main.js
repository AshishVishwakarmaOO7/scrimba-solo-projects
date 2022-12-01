/* 
  1 meter = 3.281 feet
  1 liter = 0.264 gallon
  1 kilogram = 2.204 pound
 */

const userInput = document.getElementById("user-input");
const convertBtn = document.getElementById("btn-convert");
const length = document.getElementById("length-output");
const volume = document.getElementById("volume-output");
const mass = document.getElementById("mass-output");

convertBtn.onclick = function () {
  let input = userInput.value;
  if (!input) {
    input = 0;
  }

  length.textContent = calcLength(input);
  volume.textContent = calcVolume(input);
  mass.textContent = calcMass(input);
};

function calcLength(usrInput) {
  return `${usrInput} meters = ${(usrInput * 3.281).toFixed(3)} feet |
   ${usrInput} feet = ${(usrInput / 3.281).toFixed(3)} meter`;
}

function calcVolume(usrInput) {
  return `${usrInput} liters = ${(usrInput * 0.264).toFixed(3)} gallons |
   ${usrInput} gallons = ${(usrInput / 0.264).toFixed(3)} liters`;
}

function calcMass(usrInput) {
  return `${usrInput} Kilos = ${(usrInput * 2.204).toFixed(3)} pounds |
   ${usrInput} pounds = ${(usrInput / 2.204).toFixed(3)}`;
}
