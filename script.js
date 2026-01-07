const display = document.getElementById('display');

function appendToDisplay(value) {
   if (display.value === '0' || display.value === 'Ошибка') {
      display.value = '';
   }
   display.value += value;
}

function clearDisplay() {
   display.value = '';
}

function calculate() {
   let expression = display.value;
   expression = expression.replace(/×/g, '*');

   let result = eval(expression);
   display.value = result;
}