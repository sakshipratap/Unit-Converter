console.log('temp unit convertor');

const celciusInput = document.querySelector('#celcius > input');
const fahrenheitInput = document.querySelector('#fahrenheit > input');
const kelvinInput = document.querySelector('#kelvin > input');


function celciusToFahrenheitToKelvin() {
    const cTemp = parseFloat(celciusInput.value);
    const fTemp = (cTemp * (9/5)) + 32;
    const kTemp = cTemp + 273.15;
    fahrenheitInput.value = fTemp;
    kelvinInput.value = kTemp;

};

function fahrenheitToCelciusToKelvin() {
    const fTemp = parseFloat(fahrenheitInput.value);
    const cTemp = (fTemp - 32) * (5/9);
    const kTemp = (fTemp + 459.67) * 5/9;
    celciusInput.value = cTemp;
    kelvinInput.value = kTemp;
};

function kelvinToCelciusToFahrenheit() {
    const kTemp = parseFloat(kelvinInput.value);
    const cTemp = kTemp - 273.15;
    const fTemp = 9/5 * (kTemp - 273.15);
    celciusInput.value = cTemp
    fahrenheitInput.value = fTemp
}

celciusInput.addEventListener('input', celciusToFahrenheitToKelvin);
fahrenheitInput.addEventListener('input', fahrenheitToCelciusToKelvin);
kelvinInput.addEventListener('input', kelvinToCelciusToFahrenheit);