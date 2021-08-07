{
    const updateResultText = (result) => {
        const resultElement = document.querySelector(".form__js-result");

        resultElement.innerText = result.toFixed(2) + ' zł'
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const priceElement = document.querySelector(".form__js-input1");
        const amountElement = document.querySelector(".form__js-input2");


        const price = +priceElement.value;
        const amount = +amountElement.value;

        const result = price * amount;
        updateResultText(result);

    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    }
    init();
}