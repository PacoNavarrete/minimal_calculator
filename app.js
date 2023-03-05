
export const app = document.addEventListener('DOMContentLoaded', (event) => {
  
  const display = document.querySelector('.screen')
  const inputButtons = document.querySelectorAll('span')
  
  let calculationArray = [];
  let accumulatedValue;

  function processCalculation(element){
    const data = element.textContent;
    if (data === "CLEAR") {
      calculationArray = [];
      display.textContent = '.';
    }else if (data === "=") {
      display.textContent = eval(accumulatedValue)
      calculationArray = [];
    }else {
      calculationArray.push(data)
      accumulatedValue = calculationArray.join('')
      display.textContent = accumulatedValue;
    }
  }

  inputButtons.forEach(element => {
    element.addEventListener('click', () => processCalculation(element))
  })
  


})