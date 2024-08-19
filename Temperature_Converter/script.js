const celToFar = document.getElementById('celsius');
const farToCel = document.getElementById('fahrenheit');
const temperatureInput = document.getElementById('temperature');
const convertBtn = document.getElementById('convertBtn');
const convertedTemp = document.getElementById('convertedTemp');

convertBtn.onclick = function() {
    const temperature = Number(temperatureInput.value);

    if (celToFar.checked) {
        const result = temperature * (9/5) + 32;
        convertedTemp.textContent = `${temperature}°C is ${result.toFixed(2)}°F`;
        convertedTemp.style.color = "#66fa36";
    } else if (farToCel.checked) {
        const result = (temperature - 32) / (9/5);
        convertedTemp.textContent = `${temperature}°F is ${result.toFixed(2)}°C`;
        convertedTemp.style.color = "#39e689";
    } else {
        convertedTemp.textContent = "Please select a conversion option.";
        convertedTemp.style.color = 'red';
    }
}
