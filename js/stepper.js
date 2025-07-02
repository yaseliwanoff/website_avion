const steppers = document.querySelectorAll(".stepper");

steppers.forEach((stepper) => {
    const btnMinus = stepper.querySelector(".stepper__btn--minus");
    const btnPlus = stepper.querySelector(".stepper__btn--plus");
    const input = stepper.querySelector(".stepper__input");

    const min = Number(input.getAttribute("min")) || 0;
    const max = Number(input.getAttribute("max")) || Infinity;

    // Обновить состояние кнопок
    function updateButtons(value) {
        btnMinus.classList.toggle("stepper__btn--disabled", value <= min);
        btnPlus.classList.toggle("stepper__btn--disabled", value >= max);
    }

    // Обработчик изменения вручную
    input.addEventListener("change", () => {
        let value = Number(input.value);

        if (value < min) {
            value = min;
        } else if (value > max) {
            value = max;
        }

        input.value = value;
        updateButtons(value);
    });

    // Обработчик "+" кнопки
    btnPlus.addEventListener("click", () => {
        let value = Number(input.value);
        if (value < max) {
            value++;
            input.value = value;
            updateButtons(value);
        }
    });

    // Обработчик "-" кнопки
    btnMinus.addEventListener("click", () => {
        let value = Number(input.value);
        if (value > min) {
            value--;
            input.value = value;
            updateButtons(value);
        }
    });

    // Первичная инициализация кнопок
    updateButtons(Number(input.value));
});
