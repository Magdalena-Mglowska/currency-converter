let priceElement = document.querySelector(".form__js-input1");
let amountElement = document.querySelector(".form__js-input2");
let formElement = document.querySelector (".js-form");
let resultElement = document.querySelector(".form__js-result");

formElement.addEventListener("submit", (event)=>{
    event.preventDefault();

let price = +priceElement.value;
let amount = +amountElement.value;

let result = price*amount;

resultElement.innerText = result.toFixed(2) +' zł'; 
});

