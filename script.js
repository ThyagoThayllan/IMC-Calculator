const nameInput = document.querySelector('#name');
const heightInput = document.querySelector('#height');
const weightInput = document.querySelector('#weight');
const calculateButton = document.querySelector('#calculate');
const resultIMC = document.querySelector('#result')


document.addEventListener('DOMContentLoaded', () => {
    if (resultIMC.childElementCount === 0) {
        const emptyResult = document.createElement('img');
        emptyResult.src = './img/empty.svg';
        resultIMC.appendChild(emptyResult);
    }
})


function calculateIMC() {
    event.preventDefault();


    if (nameInput.value === '' || heightInput.value === '' || weightInput.value === '') {
        resultIMC.textContent = 'Preencha todos os campos!';
    } else {
        const imcValue = (weightInput.value / (heightInput.value ** 2)).toFixed(2)
        resultIMC.value = imcValue;

        if (resultIMC.value < 18.5) {
            resultIMC.textContent = `${nameInput.value}, seu IMC é ${resultIMC.value}. Você está abaixo do peso.`
        }
        if (resultIMC.value >= 18.5 && resultIMC.value <= 24.9) {
            resultIMC.textContent = `${nameInput.value}, seu IMC é ${resultIMC.value}. Você está com o peso normal.`
        }
        if (resultIMC.value >= 25 && resultIMC.value <= 29.9) {
            resultIMC.textContent = `${nameInput.value}, seu IMC é ${resultIMC.value}. Você está com sobrepeso.`
        }
        if (resultIMC.value >= 30) {
            resultIMC.textContent = `${nameInput.value}, seu IMC é ${resultIMC.value}. Você está obeso.`
        }
    };

}


calculateButton.addEventListener('click', calculateIMC);