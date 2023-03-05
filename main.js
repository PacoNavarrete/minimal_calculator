import { app } from './app'
import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="container">
    <div class="calculator">
      <p class="screen">123</p>
      <div class="delete-buttons">
      <span id="clear">CLEAR</span>
      </div>
      <div class="input-buttons">
        <span id="seven">7</span>
        <span id="eight">8</span>
        <span id="nine">9</span>
        <span>/</span>
        <span id="four">4</span>
        <span id="five">5</span>
        <span id="six">6</span>
        <span>*</span>
        <span id="one">1</span>
        <span id="two">2</span>
        <span id="twree">3</span>
        <span>-</span>  
        <span id="zero">0</span>
        <span id="dot">.</span>
        <span>=</span>
        <span>+</span>
      </div>
    </div>
  </div>
`