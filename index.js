const input = document.querySelector("#input-el")
const btn = document.querySelector("#btn-el")
const length = document.querySelector("#length-el")
const volume = document.querySelector("#volume-el")
const mass = document.querySelector("#mass-el")

btn.addEventListener("click", function() {
    const inFeet = input.value * 3.281
    const inMeter = input.value / 3.281
    const inGallon = input.value * 0.264
    const inLiter = input.value / 0.264
    const inPound = input.value * 2.204
    const inKilo = input.value / 2.204
    length.textContent = `${input.value} meters = ${inFeet.toFixed(3)} feet | ${input.value} feet = ${inMeter.toFixed(3)} meters`
    volume.textContent = `${input.value} liters = ${inGallon.toFixed(3)} gallons | ${input.value} gallons = ${inLiter.toFixed(3)} liters`  
    mass.textContent = `${input.value} kilos = ${inPound.toFixed(3)} pounds | ${input.value} pounds = ${inKilo.toFixed(3)} kilos`   
    input.value = ""
})