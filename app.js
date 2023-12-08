const input = document.querySelector(".cndev__unit-converter input");
const resultsWrap = document.querySelector('.cndev__results-wrap');

function cndev__simpleMath( comparison, operator, firstValue, secondValue ) {
	let result;
	switch (operator) {
		case '*':
			result = firstValue * secondValue;
			break;
		case '/':
			result = firstValue / secondValue;
			break;
		case '+':
			result = firstValue + secondValue;
			break;
		case '-':
			result = firstValue - secondValue;
			break;
		default:
			alert('Invalid math operator');
			break;
	}
	return firstValue + ' ' + comparison.split(',')[0] + ' = ' + result.toFixed(2) + ' ' + comparison.split(',')[1];
}

document.querySelector('.cndev__unit-converter button').addEventListener("click", function() {
	let theBigGuy = input.value;
	input.value = "";

    if ( '' === theBigGuy ) {
        alert("Please inform a value.");
		return;
	}

	resultsWrap.style.maxHeight = '1000px';
	resultsWrap.style.padding = '20px';
	resultsWrap.querySelectorAll('p').forEach((selector, index) => {
		selector.textContent = cndev__simpleMath(selector.dataset.comparison, selector.dataset.math, theBigGuy, parseFloat(selector.dataset.value));
	});
});

/*
Old code to compare

const input = document.querySelector("#input-el")
const btn = document.querySelector("#btn-el")
const length = document.querySelector("#length-el")
const volume = document.querySelector("#volume-el")
const mass = document.querySelector("#mass-el")

btn.addEventListener("click", function() {
    if (input.value === "") {
        alert("Please inform a value.")
        input.value = ""
    } else if (isNaN(input.value)) {
        alert("Informed value must be a number.")
        input.value = ""
    } else {
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
    }
})
*/