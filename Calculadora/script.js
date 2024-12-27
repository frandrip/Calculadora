const resultInput = document.getElementById('result');

// Añade un valor al campo de resultado
function appendValue(value) {
    resultInput.value += value;
}

// Borra el contenido del campo de resultado
function clearResult() {
    resultInput.value = '';
}

// Calcula el resultado basado en la expresión ingresada
function calculateResult() {
    try {
        resultInput.value = eval(resultInput.value);
    } catch {
        resultInput.value = 'Error';
    }
}
    